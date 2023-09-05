import { MouseEventHandler } from "react"

export type PaginationIndicatorProps = {
    count: number,
    leftIconOnClick: MouseEventHandler<HTMLDivElement>,
    rightIconOnClick: MouseEventHandler<HTMLDivElement>,
    isFirstPage: boolean,
    isLastPage: boolean
}