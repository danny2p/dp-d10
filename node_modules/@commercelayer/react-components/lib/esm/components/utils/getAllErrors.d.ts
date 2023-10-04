import { type LineItem } from '@commercelayer/sdk';
import { type BaseError } from '../../typings/errors';
import { type TResourceError } from '../errors/Errors';
export interface AllErrorsParams {
    allErrors: BaseError[];
    messages: BaseError[];
    field?: string;
    props: JSX.IntrinsicElements['span'];
    lineItem?: LineItem | null;
    resource?: TResourceError;
    returnHtml?: boolean;
}
export type GetAllErrors = <P extends AllErrorsParams>(params: P) => Array<JSX.Element | string | undefined>;
declare const getAllErrors: GetAllErrors;
export default getAllErrors;
