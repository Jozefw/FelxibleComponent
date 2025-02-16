import React from 'react'
import {ComponentPropsWithoutRef} from 'react';

type InputProps = {
    id:string;
    label:string;
} & ComponentPropsWithoutRef<'input'>;
export default function Input({label,id,...props}:InputProps) {
    return (
        <p>
            <label>{label}</label>
            <input id={id} {...props}></input>
        </p>
    )
}
