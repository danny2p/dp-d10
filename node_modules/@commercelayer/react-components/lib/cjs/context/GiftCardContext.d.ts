/// <reference types="react" />
import { type GiftCardState, type GiftCardRecipientI, type GiftCardI } from '../reducers/GiftCardReducer';
import { type BaseError } from '../typings/errors';
export interface GCContext extends GiftCardState {
    addGiftCardRecipient: (values: GiftCardRecipientI & object) => void;
    addGiftCard: (values: GiftCardI & object) => void;
    addGiftCardError: (errors: BaseError[]) => void;
    addGiftCardLoading: (loading: boolean) => void;
}
declare const GiftCardContext: import("react").Context<GCContext>;
export default GiftCardContext;
