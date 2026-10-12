import { ProductStatus } from '@entities/product/models/product.model';

export enum DefaultStatus {
    DEAFAULT = 'default',
}

export const statusText = new Map<ProductStatus | DefaultStatus, string>([
    [ProductStatus.IN_QUEUE, 'В очереди'],
    [ProductStatus.CHECKED, 'Проверен'],
    [ProductStatus.REJECTED, 'Отбракован'],

    [DefaultStatus.DEAFAULT, 'Отсутствует'],
]);

export const colors = new Map<ProductStatus | DefaultStatus, string>([
    [ProductStatus.IN_QUEUE, 'info'],
    [ProductStatus.CHECKED, 'positive'],
    [ProductStatus.REJECTED, 'negative'],

    [DefaultStatus.DEAFAULT, 'neutral'],
]);
