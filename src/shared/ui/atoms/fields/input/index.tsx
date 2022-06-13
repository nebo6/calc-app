import React, { FC, InputHTMLAttributes, useEffect, useRef } from "react"
import cn from "classnames"
import s from "./styles.module.sass"
import Inputmask from "inputmask"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isInvalid?: boolean
    PrefixIcon?: React.ElementType
}

export const Input:FC<Props> = ({isInvalid, PrefixIcon, ...props}) => {
    return (
        <div className={s.wrapper}>
            { PrefixIcon ? <div className={s.icon}><PrefixIcon/></div> : null }
            <input {...props} className={cn(s.input, {
                [s.invalid]: isInvalid
            })} />
        </div>
    )
}

interface MaskProps extends Inputmask.Options {
    isInvalid?: boolean
    PrefixIcon?: React.ElementType
    inputProps: InputHTMLAttributes<HTMLInputElement>
}

export const Mask:FC<MaskProps> = ({PrefixIcon, isInvalid, inputProps, ...options}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        const im = new Inputmask(options);
        if (inputRef.current)
            im.mask(inputRef.current)
    }, [])
    
    return (
        <div className={s.wrapper}>
            { PrefixIcon ? <div className={s.icon}><PrefixIcon/></div> : null }
            <input {...inputProps} className={cn(s.input, {
                [s.invalid]: isInvalid
            })} ref={inputRef}/>
        </div>
    )
}