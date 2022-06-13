import { FC, ReactNode } from "react"
import s from "./styles.module.sass"

export const Wrapper:FC<{children: ReactNode}> = ({children}) => {
    return <div className={s.wrapper}>{children}</div>
}