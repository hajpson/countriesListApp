import { FC } from "react"
import { CountryTileProps } from "../types/countryTileProps"

export const CountryListTile: FC<CountryTileProps> = ({ universities }) => {
    return (
        <div className="tilesContainer">
        {universities.map((university) => {
            return (
                <div className="listTile">
                    <p>{university.country}</p>
                </div>
            )
        })}
        </div>
    )
}