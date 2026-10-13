import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { DEFAUL_NOTIFICATION_DURATION } from '@shared/const/notification';
import { NotificationService } from '@shared/services/notification.service';
import { takeUntil, timer } from 'rxjs';

@Component({
    imports: [TuiButton],
    selector: 'app-clear-line-button',
    styleUrl: './clear-line-button.scss',
    templateUrl: './clear-line-button.html',
})
export class ClearLineButton {
    constructor(
        protected productLineService: ProductLineService,
        private notificationService: NotificationService,
    ) {}

    clearLine() {
        const result = this.productLineService.clearLine();
        if (!result) {
            const duration = DEFAUL_NOTIFICATION_DURATION;
            this.notificationService
                .showMessage(`Не удалось отчистить линию`, {
                    appearance: 'negative',
                    autoClose: duration,
                })
                .pipe(takeUntil(timer(duration)))
                .subscribe();
        }
    }
}
