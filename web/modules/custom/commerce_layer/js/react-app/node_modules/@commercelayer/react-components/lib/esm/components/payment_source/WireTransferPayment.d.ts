export interface WireTransferConfig {
    infoMessage?: {
        text?: string | JSX.Element[];
        className?: string;
    };
}
type Props = WireTransferConfig & JSX.IntrinsicElements['div'] & {
    'data-testid'?: string;
};
export declare function WireTransferPayment({ infoMessage, ...p }: Props): JSX.Element;
export default WireTransferPayment;
