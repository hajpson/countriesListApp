import { FC } from "react"

type SearchBarProps = {
    placeholder: string,
    textOnChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    textValue: string
}

export const SearchBar: FC<SearchBarProps> = (props) => {
    const { placeholder, textOnChange, textValue } = props

    return (
        <div>
            <input className="textInput"
                placeholder={placeholder}
                onChange={textOnChange}
                value={textValue}></input>
        </div>
    )
}