import { FC } from "react"
import cn from "classnames"
import { Fields, Button } from "shared/ui"
import { $tipsInput, $tipButtons, tipsChanged, tipsClicked } from "../../model"
import s from "./styles.module.sass"
import { useEvent, useStore } from "effector-react"

export const Tips:FC = () => {
    const value = useStore($tipsInput)
    const { list, checked } = useStore($tipButtons)
    const onChange = useEvent(tipsChanged)
    const onClick = useEvent(tipsClicked)
    
    return <>
        <Fields.Label>Select Tip %</Fields.Label>
        <div className={cn("row", s.tips)}>
            { list.map(el => {
                return <div className="col-6 col-sm-4 mb-3" key={el}>
                    <Button 
                        onClick={() => onClick(el)}
                        className={cn({"active": checked === el})}
                    >{el}</Button>
                </div>
            }) }
            <div className="col-6 col-sm-4 mb-3">
                <Fields.Mask
                    inputProps={{
                        name: "tip",
                        onChange: (e) => onChange(e.target.value),
                        value,
                        placeholder: "Custom"
                    }}
                    mask={"9{*}"}
                    showMaskOnHover={false}
                    showMaskOnFocus={true}
                />
            </div>
        </div>
    </>
}