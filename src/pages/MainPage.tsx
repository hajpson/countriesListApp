import { useRef, useState } from "react"
import { CountryListTile } from "../components/CountryListTile"
import { SearchBar } from "../components/SearchBar"
import { useCountriesData } from "../hooks/CountriesDataContext"
import axios from "axios"
import Fuse from "fuse.js"
import { University } from "../models/University"

const baseUrl = "http://universities.hipolabs.com"

export const MainPage = () => {


    const { countriesData, setCountriesData } = useCountriesData()
    const [inputValue, setInputValue] = useState('')
    const isLoading = useRef(false)
    let timeout: ReturnType<typeof setTimeout>

    const handleTextOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value

        event.preventDefault()
        setInputValue(value)

        if(value.length < 5) {
            return;
        }

        isLoading.current = true
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            axios
                .get(`${baseUrl}/search?country=`)
                .then((response) => {
                    const fuse = new Fuse<University>(response.data, { keys: ['country'] })
                    const fuseSearch = fuse.search(value)
                    setCountriesData(fuseSearch.map(({ item }) => item))
                    isLoading.current = false
                })
        }, 500)
    }

    return (
        <div className="mainContainer">
            <div className="headerContainer">
                <h1 className="header">Countries searcher</h1>

                <SearchBar placeholder='Search for country'
                    textOnChange={handleTextOnChange}
                    textValue={inputValue} />
            </div>
            {
                isLoading.current
                ?
                <div><p>Loading ...</p></div>
                :
                countriesData === null
                    || countriesData === undefined
                    || countriesData.length === 0
                    ?
                    <h2>No data found, try a different search.</h2>
                    :
                    <div className='listTilesContainer'>
                        <CountryListTile universities={countriesData} />
                    </div>
            }
        </div>
    )
}