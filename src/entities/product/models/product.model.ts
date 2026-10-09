export enum ProductStatus {
    IN_QUEUE,
    CHECKED,
    REJECTED,
}

export type Product = {
    id: string;
    timestamp: number;
    status: ProductStatus;
};
