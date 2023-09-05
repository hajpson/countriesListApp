import { CountriesData } from "./countriesData"

export type CountriesDataContextType = {
    countriesData: CountriesData | null,
    setCountriesData: React.Dispatch<React.SetStateAction<CountriesData | null>>
}