import { useState } from "react"
import { CountryListTile } from "../components/CountryListTile"
import { SearchBar } from "../components/SearchBar"
import { useCountriesData } from "../hooks/CountriesDataContext"

export const MainPage = () => {
    const { countriesData, setCountriesData } = useCountriesData()
    const [inputValue, setInputValue] = useState('')

    const handleTextOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        event.preventDefault()
        setInputValue(event.target.value)
    }

    return (
        <>
            <SearchBar placeholder='Search for country'
                textOnChange={handleTextOnChange}
                textValue={inputValue} />
            {
                countriesData === null
                    || countriesData === undefined
                    || countriesData.length === 0
                    ?
                    <h2>No data found, try a different search.</h2>
                    :
                    <div className='listTilesContainer'>
                        <CountryListTile />
                    </div>
            }
        </>
    )
}