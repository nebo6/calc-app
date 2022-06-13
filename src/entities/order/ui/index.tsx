import { FC } from "react"
import cn from "classnames"
import { Bill } from "./bill"
import { Persons } from "./persons"
import { Tips } from "./tips"
import { Result } from "./result"
import { Wrapper } from "./wrapper"
import s from "./styles.module.sass"

export const Order:FC = () => {
    return (
        <Wrapper>
            <div className="row">
                <div className="col-md-6">
                    <div className="p-2 p-sm-3">
                        <div className={s.gap}>
                            <Bill/>
                        </div>
                        <div className={s.gap}>
                            <Tips/>
                        </div>
                        <div className={cn(s.gap, "mb-xs-0")}>
                            <Persons/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <Result/>
                </div>
            </div>
        </Wrapper>
    )
}