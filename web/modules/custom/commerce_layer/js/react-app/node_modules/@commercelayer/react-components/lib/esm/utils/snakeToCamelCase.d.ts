export type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}` ? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}` : S;
export type SnakeToCamelCaseNested<T> = T extends object ? {
    [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<T[K]>;
} : T;
export declare function snakeToCamelCase<S extends string>(value: S): SnakeToCamelCase<S>;
