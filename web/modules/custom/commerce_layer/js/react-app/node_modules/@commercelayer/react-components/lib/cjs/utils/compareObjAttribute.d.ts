type Item = Record<string, any>;
interface TArgs<A, B> {
    attributes: A;
    object: B;
}
export default function compareObjAttribute<A extends Item, B extends Item>({ attributes, object }: TArgs<A, B>): Item;
export {};
