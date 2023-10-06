export type GetAmountInterface<T = any> = (base: string, type: string, format: string, obj: Record<string, any>) => T extends number ? number : string;
export default function getAmount<T = string>(args: {
    base: string;
    type: string;
    format: string;
    obj: Record<string, any>;
}): T extends number ? number : string;
