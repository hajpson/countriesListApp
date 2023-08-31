import { University } from "../models/University"

export type CountriesDataContextType = {
    countriesData: University[] | null,
    setCountriesData: React.Dispatch<React.SetStateAction<University[] | null>>
}