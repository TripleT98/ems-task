import { Product, ProductStatus } from '@entities/product/models/product.model';

export enum ProductEventType {
    ADDED = 'added',
    STATUS_CHANGED = 'status_changed',
    REMOVED = 'removed',
    AUTO_REMOVE = 'auto_remove',
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
        const { id: productId, status } = product;
        return {
            id: crypto.randomUUID(),
            type: ProductEventType.ADDED,
            productId,
            timestamp: new Date().getTime(),
            newStatus: status,
        };
    }

    static statusChangeEvent(product: Product, previousStatus: ProductStatus): ProductLineEvent {
        const { id: productId, status: newStatus } = product;
        return {
            id: crypto.randomUUID(),
            type: ProductEventType.STATUS_CHANGED,
            productId,
            timestamp: new Date().getTime(),
            previousStatus,
            newStatus,
        };
    }

    static removeEvent(
        product: Product,
        removeType:
            ProductEventType.AUTO_REMOVE | ProductEventType.REMOVED = ProductEventType.AUTO_REMOVE,
    ): ProductLineEvent {
        const { id: productId } = product;
        return {
            id: crypto.randomUUID(),
            type: removeType,
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
