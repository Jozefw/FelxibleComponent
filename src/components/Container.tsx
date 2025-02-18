import React from 'react'
import {type ReactNode, type ElementType, type ComponentPropsWithoutRef} from 'react'


// type ContainerProps ={
//     as:ElementType;
//     children:ReactNode;
// } & ComponentPropsWithoutRef

type ContainerProps<PlaceHolder extends ElementType> ={
    as?:PlaceHolder;
    children:ReactNode;
} & ComponentPropsWithoutRef<PlaceHolder>


export default function Container<AnotherPlaceHolder extends ElementType>({as, children,...props}:ContainerProps<AnotherPlaceHolder>) {
    const AsComponent = as || 'div';
    return (
        <AsComponent {...props}>{children}</AsComponent>
    )
}
