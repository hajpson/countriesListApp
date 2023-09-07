import { FC } from "react";
import { CountryListTileProps } from "../types/countryListTileProps";
import { useNavigate } from "react-router-dom";

export const CountryListTile: FC<CountryListTileProps> = ({ university }) => {

    const navigate = useNavigate()

    const handleTileOnClick = () => {
        navigate("/countryDetails", { state: university })
    }

    return (
        <div className="listTile" onClick={handleTileOnClick}>
            <div>
                <p>{university.name}</p>
                <p>{university.country}</p>
            </div>
        </div>
    )
}