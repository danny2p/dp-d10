import { type CommerceLayerClient } from '@commercelayer/sdk';
interface ReturnProps {
    accessToken?: string;
    sdkClient: () => CommerceLayerClient | undefined;
}
export declare function useCommerceLayer(): ReturnProps;
export default useCommerceLayer;
