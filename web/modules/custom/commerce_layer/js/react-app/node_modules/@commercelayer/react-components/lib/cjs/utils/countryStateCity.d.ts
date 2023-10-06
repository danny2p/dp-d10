type ReturnStates = Array<{
    label: string;
    value: string;
}>;
export declare function getCountries(): ReturnStates;
export declare function getStateOfCountry(country_code: string): ReturnStates;
export declare function isValidState(state_code: string, country_code: string): boolean;
export {};
