import { type ResourceIncluded } from '../reducers/OrderReducer';
import type { Order } from '@commercelayer/sdk';
interface Params {
    order: Order;
    resourceInclude: ResourceIncluded[];
}
export default function checkIncludeResources({ order, resourceInclude }: Params): boolean;
export {};
