import { type Component, type ForwardedRef } from 'react';
export interface ParentProps {
    parentRef?: ForwardedRef<any>;
    children?: typeof Component | ((P: any) => JSX.Element | null);
}
export default function Parent({ children, ...p }: ParentProps): JSX.Element | null;
