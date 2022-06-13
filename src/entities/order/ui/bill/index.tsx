import { FC } from "react"
import { Fields } from "shared/ui"
import { ReactComponent as Dollar } from "../icons/icon-dollar.svg"
import { $bill, billChanged } from "../../model"
import { useEvent, useStore } from "effector-react"

export const Bill:FC = () => {
    const value = useStore($bill)
    const onChange = useEvent(billChanged)
    
    return <>
        <Fields.Label>Bill</Fields.Label>
        <Fields.Mask
            inputProps={{
                name: "bill",
                onChange: (e) => {
                    return onChange(e.target.value)
                },
                inputMode: "numeric",
                value,
            }}
            PrefixIcon={() => <Dollar/>}
            {...{
                groupSeparator: " ",
                alias: "numeric",
                digits: 2,
                digitsOptional: false,
                rightAlign: false,
                showMaskOnHover: false,
                showMaskOnFocus: true
            }}
        />
    </>
}