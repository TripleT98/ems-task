import { Product, ProductStatus } from "@entities/product/models/product.model"


export enum ProductEventType {
    ADDED = 'added',
    STATUS_CHANGED = 'status_changed',
    REMOVED = 'removed',
}

export type ProductLineEvent = {
    id: string,
    productId: string,
    type: ProductEventType,
    timestamp: number,
    previousStatus?: ProductStatus,
    newStatus?: ProductStatus
}

export class ProductLineEventCreator {
    static addEvent(product: Product): ProductLineEvent {
        const { id: productId, timestamp } = product
        return {
            id: crypto.randomUUID(),
            type: ProductEventType.ADDED,
            productId,
            timestamp,
        }
    }

    static statusChangeEvent(product: Product, previousStatus: ProductStatus): ProductLineEvent {
        const { id: productId, timestamp, status: newStatus } = product
        return {
            id: crypto.randomUUID(),
            type: ProductEventType.STATUS_CHANGED,
            productId,
            timestamp,
            previousStatus,
            newStatus
        }
    }

    static removeEvent(product: Product): ProductLineEvent {
        const { id: productId, timestamp } = product
        return {
            id: crypto.randomUUID(),
            type: ProductEventType.REMOVED,
            productId,
            timestamp,
        }
    }
}