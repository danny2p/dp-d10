export default function omit<O extends Record<string, any>, K extends Array<keyof O>>(obj: O, keys: K): Pick<O, Exclude<keyof O, K[number]>>;
