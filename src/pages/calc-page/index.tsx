import { FC } from "react"
import cn from "classnames"
import { Order } from "entities/order"
import { ReactComponent as Logo } from "../../logo.svg"
import s from "./styles.module.sass"

export const CalcPage:FC = () => {
    return <section className={cn(s.page, "d-flex flex-wrap flex-column justify-content-center")}>
        <div className={s.logo}><Logo/></div>
        <Order/>
    </section>
}