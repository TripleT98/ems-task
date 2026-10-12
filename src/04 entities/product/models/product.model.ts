export enum ProductStatus {
    IN_QUEUE = 'in_queue',
    CHECKED = 'checked',
    REJECTED = 'rejeced',
}

export type Product = {
    id: string;
    timestamp: number;
    status: ProductStatus;
};
