import { FC } from "react";
import { CountryListTileProps } from "../types/countryListTileProps";

export const CountryListTile: FC<CountryListTileProps> = ({ university }) => {
    return (
        <div className="listTile">
            <p>{university.country}</p>
        </div>
    )
}