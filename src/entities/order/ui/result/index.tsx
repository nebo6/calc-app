import { FC } from "react"
import cn from "classnames"
import { Fields, Title, Button } from "shared/ui"
import s from "./styles.module.sass"
import { $result, reseted } from "../../model"
import { useEvent, useStore } from "effector-react"

export const Result:FC = () => {
    const { tip, total } = useStore($result)
    const onReset = useEvent(reseted)
    const disabled = tip === "0.00" && total === "0.00"
    return (
        <div className={cn(s.result, "d-flex flex-column")}>
            <div className="row justify-content-between align-items-center mb-sm-5 mb-4">
                <div className="col-auto">
                    <Title>Tip Amount</Title>
                    <Fields.Label className="mb-0 small">/ person</Fields.Label>
                </div>
                <div className="col">
                    <span className={s.value}>${tip}</span>
                </div>
            </div>
            <div className="row justify-content-between align-items-center mb-sm-5 mb-4">
                <div className="col-auto">
                    <Title>Total</Title>
                    <Fields.Label className="mb-0 small">/ person</Fields.Label>
                </div>
                <div className="col">
                    <span className={s.value}>${total}</span>
                </div>
            </div>
            <div className="mt-auto">
                <Button className="lighter" onClick={onReset} disabled={disabled}>Reset</Button>
            </div>
        </div>
    )
}