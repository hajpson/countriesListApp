import axios from "axios"
import { CountryList } from "./CountryList"
import { SearchBar } from "./SearchBar"
import Fuse from "fuse.js"
import { University } from "../models/University"
import { useRef, useState } from "react"
import { useCountriesData } from "../hooks/useCountriesDataHook"

const baseUrl = "http://universities.hipolabs.com/search?country="

export const PaginatedWindow = () => {
    const { countriesData, setCountriesData } = useCountriesData()
    const [inputValue, setInputValue] = useState('')
    const isLoading = useRef(false)
    let timeout: ReturnType<typeof setTimeout>

    const handleCurrentPageData = (
        value: string
    ) => {
        isLoading.current = true
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            axios
                .get(`${baseUrl}`)
                .then((response) => {
                    const fuse = new Fuse<University>(response.data, { keys: ['country'] })
                    const fuseSearch = fuse.search(value)
                    const filteredData = {
                        universities: fuseSearch.map(({ item }) => item),
                        currentPage: 1,
                        universitiesCount: fuseSearch.length
                    }

                    setCountriesData(filteredData)
                    isLoading.current = false
                })
        }, 500)
    }

    const handleTextOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value

        event.preventDefault()
        setInputValue(value)

        if (value.length < 5) {
            return;
        }

        handleCurrentPageData(value)
    }



    return (
        <>
            <SearchBar placeholder='Search for country'
                textOnChange={handleTextOnChange}
                textValue={inputValue} />

            {
                isLoading.current
                    ?
                    <div><p>Loading ...</p></div>
                    :
                    countriesData === null
                        || countriesData === undefined
                        || countriesData.universities.length === 0
                        ?
                        <h2>No data found, try a different search.</h2>
                        :
                        <div className='listTilesContainer'>
                            <CountryList />
                        </div>
            }
        </>
    )
}