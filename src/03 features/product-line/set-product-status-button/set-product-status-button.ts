import { ProductLineService } from '@entities/product/services/product-line.service';
import { Component, computed, input, output } from '@angular/core';
import { Product, ProductStatus } from '@entities/product/models/product.model';
import { UiProductStatus } from '@shared/ui/ui-product-status/ui-product-status';
import { TuiDataList } from '@taiga-ui/core';
import { NotificationService } from '@shared/services/notification.service';
import { DEFAUL_NOTIFICATION_DURATION } from '@shared/const/notification';
import { takeUntil, timer } from 'rxjs';

@Component({
    imports: [UiProductStatus, TuiDataList],
    selector: 'app-set-product-status-button',
    styleUrl: './set-product-status-button.scss',
    templateUrl: './set-product-status-button.html',
})
export class SetProductStatusButton {
    product = input.required<Product>();
    productStatuses = input.required<ProductStatus[]>();

    selected = output<boolean>();

    protected readonly availableStatuses = computed(() => {
        return this.productStatuses().filter((status) => this.product().status !== status);
    });

    constructor(
        private productLineService: ProductLineService,
        private notificationService: NotificationService,
    ) {}

    setProductStatus(status: ProductStatus) {
        const result = this.productLineService.setProductStatus(this.product().id, status);
        if (result) {
            this.selected.emit(true);
        } else {
            const duration = DEFAUL_NOTIFICATION_DURATION;
            this.selected.emit(false);
            this.notificationService
                .showMessage(`Не удалось установить статус продукту ${this.product().id}`, {
                    appearance: 'negative',
                    autoClose: duration,
                })
                .pipe(takeUntil(timer(duration)))
                .subscribe();
        }
    }
}
