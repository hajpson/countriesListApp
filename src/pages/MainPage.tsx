import { PaginatedWindow } from "../components/PaginatedWindow"

export const MainPage = () => {
    return (
        <div className="mainContainer">
            <div className="headerContainer">
                <h1 className="header">Countries searcher</h1>

                <PaginatedWindow />
            </div>
        </div>
    )
}