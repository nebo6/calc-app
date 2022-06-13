import { FC, ReactNode } from "react"
import cn from "classnames"
import s from "./styles.module.sass"

interface Props {
    type?: "page" | "section" | "block"
    children: ReactNode
}

export const Title:FC<Props> = ({type = "block", children}) => {
    if (type === "page") 
        return <h1 className={cn(s.title, s.page)}>{children}</h1>
    if (type === "section") 
        return <h2 className={cn(s.title, s.section)}>{children}</h2>
    return <h4 className={cn(s.title, s.block)}>{children}</h4>
}