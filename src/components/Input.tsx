import React, {ComponentPropsWithoutRef} from 'react';

type InputProps = {
    id:string;
    label:string;
} & ComponentPropsWithoutRef<'input'>;
export default function Input({label,id,...props}:InputProps) {
    return (
        <p>
            <label>{label}</label>
            <input id={id} name={id} {...props}></input>
        </p>
    )
}
