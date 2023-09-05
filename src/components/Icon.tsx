import { FC } from "react";
import { CustomIcon } from "../types/customIcon";
import { IconContext } from "react-icons";

export const Icon: FC<CustomIcon> = ({ values, icon, onClick }) => {
    return (
        <IconContext.Provider value={values}>
            <div onClick={onClick}>
                {icon}
            </div>
        </IconContext.Provider>
    )
}