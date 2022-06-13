import { FC, ReactNode } from "react"
import cn from "classnames"
import s from "./styles.module.sass"

type Props = {
    isError?: boolean
    children: ReactNode
    className?: string
}

export const Label:FC<Props> = ({children, isError, className = ""}) => {
    return <span className={
        cn(s.text, {
            [s.error]: isError,
            "mb-2": !className.includes("mb-0"),
            "mb-0": className.includes("mb-0"),
            [s.small]: className.includes("small")
        })
    }>{children}</span>
}