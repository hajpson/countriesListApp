import { useLocation, useNavigate } from "react-router-dom";
import { University } from "../models/University";

export const DetailsPage = () => {
    const navigate = useNavigate()
    const { state } = useLocation();
    const university = state as University

    const handleButtonOnClick = () => {
        navigate("/")
    }

    return (
        <>
            <div className="detailsContainer">
                <div className="detailsSubcontainer">
                    <p className="detailsLabel">Name: </p>
                    <p>{university.name}</p>
                </div>

                <div className="detailsSubcontainer">
                    <p className="detailsLabel">Country: </p>
                    <p>{university.country}</p>
                </div>

                <div className="detailsSubcontainer">
                    <p className="detailsLabel">First domain: </p>
                    <p>{university.domains[0]}</p>
                </div>

                <div className="detailsSubcontainer">
                    <p className="detailsLabel">First web page: </p>
                    <p><a href={university.web_pages[0]}>{university.web_pages[0]}</a></p>
                </div>
            </div>

            <div className="detailsSubcontainer">
                <button className="mainButton" onClick={handleButtonOnClick}>Go back</button>
            </div>
        </>
    )
}