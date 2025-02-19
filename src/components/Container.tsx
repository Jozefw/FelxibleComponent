import React, {type ReactNode, type ElementType, type ComponentPropsWithoutRef} from 'react'

// type ContainerProps ={
//     as:ElementType;
//     children:ReactNode;
// } & ComponentPropsWithoutRef

type ContainerProps<PlaceHolder extends ElementType>={
    as?:PlaceHolder;
    children:ReactNode;
} & ComponentPropsWithoutRef<PlaceHolder>;


export default function Container<OtherThing extends ElementType>({as, children,...props}:ContainerProps<OtherThing>) {
    const AsComponent = as || 'div';
    return (
            <AsComponent {...props}>{children}</AsComponent>
    )
}
