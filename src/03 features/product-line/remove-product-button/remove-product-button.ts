import { Component, input } from '@angular/core';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { DEFAUL_NOTIFICATION_DURATION } from '@shared/const/notification';
import { NotificationService } from '@shared/services/notification.service';
import { TuiButtonX } from '@taiga-ui/core';
import { takeUntil, timer } from 'rxjs';

@Component({
    imports: [TuiButtonX],
    selector: 'app-remove-product-button',
    styleUrl: './remove-product-button.scss',
    templateUrl: './remove-product-button.html',
})
export class RemoveProductButton {
    productId = input.required<string>();

    constructor(
        private productLineService: ProductLineService,
        private notificationService: NotificationService,
    ) {}

    removeProduct() {
        const result = this.productLineService.removeProduct(this.productId());
        if (!result) {
            const duration = DEFAUL_NOTIFICATION_DURATION;
            this.notificationService
                .showMessage(`Не удалось установить удалить продукт ${this.productId()}`, {
                    appearance: 'negative',
                    autoClose: duration,
                })
                .pipe(takeUntil(timer(duration)))
                .subscribe();
        }
    }
}
