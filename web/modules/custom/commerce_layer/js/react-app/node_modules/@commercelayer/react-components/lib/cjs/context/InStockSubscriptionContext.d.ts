/// <reference types="react" />
import { type setInStockSubscription, type InStockSubscriptionState } from '../reducers/InStockSubscriptionReducer';
export interface InitialInStockSubscriptionContext extends InStockSubscriptionState {
    setInStockSubscription?: typeof setInStockSubscription;
}
declare const InStockSubscriptionContext: import("react").Context<InitialInStockSubscriptionContext>;
export default InStockSubscriptionContext;
