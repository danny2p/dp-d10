/// <reference types="react" />
export interface OrderListPaginationContext {
    canNextPage: boolean;
    canPreviousPage: boolean;
    gotoPage: (page: number) => void;
    nextPage: () => void;
    pageCount: number;
    pageIndex: number;
    pageOptions: number[];
    pageSize: number;
    previousPage: () => void;
    setPageSize: (pageCount: number) => void;
    totalRows: number;
}
declare const ctx: import("react").Context<OrderListPaginationContext | null>;
export default ctx;
