import { FC, createContext, useState } from "react";
import { CountriesDataProviderProps } from "../types/countriesDataProviderProps";
import { CountriesDataContextType } from "../types/countriesDataContextType";
import { CountriesData } from "../types/countriesData";

export const CountriesDataContext = createContext<CountriesDataContextType | null>(null)

export const CountriesDataProvider: FC<CountriesDataProviderProps> = ({ children }) => {
    const [countriesData, setCountriesData] = useState<CountriesData | null>(null);

    return (
        <CountriesDataContext.Provider value={{ countriesData, setCountriesData }}>
            {children}
        </CountriesDataContext.Provider>
    )
}

