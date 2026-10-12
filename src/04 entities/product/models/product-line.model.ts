import { Product, ProductStatus } from '@entities/product/models/product.model';

export enum ProductEventType {
    ADDED = 'added',
    STATUS_CHANGED = 'status_changed',
    REMOVED = 'removed',
    CLEAR = 'clear',
}

export type ProductLineEvent = {
    id: string;
    productId: string;
    type: ProductEventType;
    timestamp: number;
    previousStatus?: ProductStatus;
    newStatus?: ProductStatus;
};

export class ProductLineEventCreator {
    static addEvent(product: Product): ProductLineEvent {
        const { id: productId, timestamp, status } = product;
        return {
            id: crypto.randomUUID(),
            type: ProductEventType.ADDED,
            productId,
            timestamp: new Date().getTime(),
            newStatus: status,
        };
    }

    static statusChangeEvent(product: Product, previousStatus: ProductStatus): ProductLineEvent {
        const { id: productId, timestamp, status: newStatus } = product;
        return {
            id: crypto.randomUUID(),
            type: ProductEventType.STATUS_CHANGED,
            productId,
            timestamp: new Date().getTime(),
            previousStatus,
            newStatus,
        };
    }

    static removeEvent(product: Product): ProductLineEvent {
        const { id: productId } = product;
        return {
            id: crypto.randomUUID(),
            type: ProductEventType.REMOVED,
            productId,
            timestamp: new Date().getTime(),
        };
    }

    static clearEvent(): ProductLineEvent {
        return {
            id: crypto.randomUUID(),
            type: ProductEventType.CLEAR,
            productId: '',
            timestamp: new Date().getTime(),
        };
    }
}
