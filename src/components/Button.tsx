import React from 'react';
import {ComponentPropsWithoutRef} from 'react';

type ButtonProps = {
    element: 'button';
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
    element: 'anchor';
} & ComponentPropsWithoutRef<'a'>

export default function Button(props: ButtonProps|AnchorProps) {
    // const { element, ...componentProps} = props;

        if(props.element === 'anchor'){
            return(<a {...props}></a>)
        }

    return (<button {...props}></button>)
}
