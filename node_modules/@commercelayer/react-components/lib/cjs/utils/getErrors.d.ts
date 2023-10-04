import { type TResourceError } from '../components/errors/Errors';
import type { BaseError, TAPIError } from '../typings/errors';
import type { ValueIteratee } from 'lodash';
import { type Dispatch } from 'react';
interface GetErrorsParams {
    error: TAPIError;
    resource: TResourceError;
    field?: string;
    attributes?: Record<string, unknown>;
}
export default function getErrors({ error, resource, field, attributes }: GetErrorsParams): BaseError[];
interface SetErrorsArgs<D> {
    currentErrors?: BaseError[];
    newErrors?: BaseError[];
    dispatch?: D;
    filterBy?: ValueIteratee<BaseError>;
}
export declare function setErrors<D extends Dispatch<any>>({ currentErrors, newErrors, dispatch, filterBy }: SetErrorsArgs<D>): BaseError[];
export {};
