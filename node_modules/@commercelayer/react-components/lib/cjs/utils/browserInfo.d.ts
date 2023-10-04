interface TReturn {
    screenWidth: string | number;
    screenHeight: string | number;
    colorDepth: string | number;
    userAgent: string;
    timeZoneOffset: number;
    language: string;
    javaEnabled: boolean;
}
export default function getBrowserInfo(): TReturn;
export declare function cleanUrlBy(symbol?: string): string;
export {};
