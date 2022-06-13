import { FC } from "react"
import { Fields } from "shared/ui"
import { ReactComponent as Person } from "../icons/icon-person.svg"
import { $persons, personsChanged } from "../../model"
import { useEvent, useStore } from "effector-react"

export const Persons:FC = () => {
    const value = useStore($persons)
    const onChange = useEvent(personsChanged)
    
    return <>
        <div className="row justify-content-between">
            <div className="col-auto"><Fields.Label>Number of People</Fields.Label></div>
            {
                value === "0" ? 
                <div className="col-auto"><Fields.Label isError={value === "0"}>Can't be zero</Fields.Label></div>
                : null
            }
        </div>
        <Fields.Mask
            inputProps={{
                name: "persons",
                onChange: (e) => onChange(e.target.value),
                value
            }}
            PrefixIcon={() => <Person/>}
            isInvalid={value === "0"}
            mask="9{*}"
        />
    </>
}