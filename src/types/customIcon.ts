import { MouseEventHandler, ReactNode } from "react"
import { IconContext } from "react-icons"

export type CustomIcon = {
    values: IconContext,
    icon: ReactNode,
    onClick: MouseEventHandler<HTMLDivElement>
}