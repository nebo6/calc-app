import { FC, ButtonHTMLAttributes } from "react"
import cn from "classnames"
import s from "./styles.module.sass"

export const Button:FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, type = "button", className = "", ...props}) => {
    return <button 
        {...props} 
        type={type} 
        className={cn(s.btn, s.default, {
            [s.lighter]: className.includes("lighter"),
            [s.active]: className.includes("active"),
        })}
    >{children}</button>
}