/// <reference types="react" />
interface Context {
    url: string | null;
    callExternalFunction: CallExternalFunction;
}
type CallExternalFunction = (params: {
    url: string;
    data: Record<string, any>;
}) => Promise<Record<string, any>>;
export declare const callExternalFunction: CallExternalFunction;
declare const ExternalFunctionContext: import("react").Context<Context>;
export default ExternalFunctionContext;
