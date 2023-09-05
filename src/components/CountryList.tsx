import { useState } from "react"
import { CountryListTile } from "./CountryListTile"
import { PaginationIndicator } from "./PaginationIndicator"
import { PageIndicators } from "../types/pageIndicators"
import { useCountriesData } from "../hooks/useCountriesDataHook"

export const CountryList = () => {
    const { countriesData, setCountriesData } = useCountriesData()
    const [pageIndicators, setPageIndicators] = useState<PageIndicators>({
        isFirstPage: true,
        isLastPage: false
    })

    const handleLeftIconOnClick = () => {
        if (countriesData?.universitiesCount === undefined
            || countriesData?.currentPage === undefined) {
            return;
        }

        if (countriesData?.currentPage === 2) {
            setPageIndicators({ isLastPage: false, isFirstPage: true })
            const firstPageData = { ...countriesData, currentPage: 1 }
            setCountriesData(firstPageData)
        } else {
            setPageIndicators({ isLastPage: false, isFirstPage: false })
            const previousPageData = { ...countriesData, currentPage: countriesData?.currentPage - 1 }
            setCountriesData(previousPageData)
        }
    }

    const handleRightIconOnClick = () => {
        if (countriesData?.universitiesCount === undefined
            || countriesData?.currentPage === undefined) {
            return;
        }

        const nextItemsCount = countriesData?.universitiesCount - (countriesData?.currentPage * 5)

        if (nextItemsCount < 5) {
            setPageIndicators({ isFirstPage: false, isLastPage: true })
        } else {
            setPageIndicators({ isFirstPage: false, isLastPage: false })
        }

        const newPageData = { ...countriesData, currentPage: countriesData?.currentPage + 1 }

        setCountriesData(newPageData)
    }

    return (
        <div className="tilesContainer">
            {countriesData?.universities.slice((countriesData?.currentPage - 1) * 5, ((countriesData?.currentPage - 1) * 5) + 5).map((university) => {
                return <CountryListTile university={university} />
            })}

            <PaginationIndicator count={countriesData?.currentPage ?? 0}
                leftIconOnClick={handleLeftIconOnClick}
                rightIconOnClick={handleRightIconOnClick}
                isLastPage={pageIndicators.isLastPage}
                isFirstPage={pageIndicators.isFirstPage} />
        </div>
    )
}