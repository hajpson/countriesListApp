import { FC, createContext, useContext, useState } from "react";
import { University } from "../models/University";
import { CountriesDataProviderProps } from "../types/countriesDataProviderProps";
import { CountriesDataContextType } from "../types/countriesDataContextType";

export const CountriesDataContext = createContext<CountriesDataContextType | null>(null)

export const CountriesDataProvider: FC<CountriesDataProviderProps> = ({ children }) => {
    const [countriesData, setCountriesData] = useState<University[] | null>(null);

    return (
        <CountriesDataContext.Provider value={{ countriesData, setCountriesData }}>
            {children}
        </CountriesDataContext.Provider>
    )
}

export const useCountriesData = () => {
    const context = useContext(CountriesDataContext)

    if (!context) {
        throw new Error('Context is null')
    }

    return context
}

