import React, { type FormEvent, type ComponentPropsWithRef } from 'react'

type FormProps = {
    onSave:(value:unknown)=>void
}& ComponentPropsWithRef<'form'>

export default function Form({onSave,children,...props}:FormProps) {
    function handleSubmit (event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }
    return (
        <form onSubmit={handleSubmit} {...props}>
            {children}
        </form>
    )
}
