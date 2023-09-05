import { University } from "../models/University"

export type CountriesData = {
    universities: University[],
    universitiesCount: number,
    currentPage: number
}