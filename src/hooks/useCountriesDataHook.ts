import { useContext } from "react"
import { CountriesDataContext } from "./CountriesDataContext"

export const useCountriesData = () => {
    const context = useContext(CountriesDataContext)

    if (!context) {
        throw new Error('Context is null')
    }

    return context
}