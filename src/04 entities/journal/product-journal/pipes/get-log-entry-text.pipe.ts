import { Pipe, PipeTransform } from '@angular/core';
import { statusText } from '@entities/product/consts/statuses';
import { ProductEventType, ProductLineEvent } from '@entities/product/models/product-line.model';

@Pipe({
    name: 'getLogEntryText',
})
export class GetLogEntryTextPipe implements PipeTransform {
    transform(event: ProductLineEvent) {
        const { type, productId, newStatus, previousStatus } = event;

        switch (type) {
            case ProductEventType.ADDED:
                return `Продукт ${productId} добавлен в очередь`;
            case ProductEventType.STATUS_CHANGED:
                if (previousStatus && newStatus) {
                    return `Продукт ${productId} изменил свой сататус с (${statusText.get(previousStatus)} - ${statusText.get(newStatus)})`;
                } else {
                    return `Продукт ${productId} изменил свой сататус`;
                }
            case ProductEventType.REMOVED:
                return `Продукт ${productId} удален из очереди`;
            case ProductEventType.AUTO_REMOVE:
                return `Продукт ${productId} удален из очереди после такта`;
            case ProductEventType.CLEAR:
                return `Очередь была очищена`;
            default:
                return ``;
        }
    }
}
