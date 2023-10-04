import { type BaseState } from '../typings/index';
import { type BaseError } from '../typings/errors';
import { type AddressField } from '../reducers/AddressReducer';
import { type AddressCreate } from '@commercelayer/sdk';
import { type AddressInputName } from '../typings/index';
import { type TResourceError } from '../components/errors/Errors';
export type ValidateFormFields = <R extends string[]>(fields: HTMLFormControlsCollection, required: R, resourceType: TResourceError) => {
    errors: BaseError[];
    values: BaseState;
};
export type ValidateValue = <V extends string | boolean, N extends string, T extends string, B extends TResourceError>(val: V, name: N, type: T, resourceType: B) => BaseError | Record<string, any>;
export declare const validateValue: ValidateValue;
declare const validateFormFields: ValidateFormFields;
export type FieldsExist = (address: AddressCreate, schema?: AddressField[]) => boolean;
export declare const fieldsExist: FieldsExist;
export declare function businessMandatoryField(fieldName: AddressInputName, isBusiness?: boolean): boolean;
export default validateFormFields;
