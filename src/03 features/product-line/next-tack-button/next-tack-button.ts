import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { DEFAUL_NOTIFICATION_DURATION } from '@shared/const/notification';
import { takeUntil, timer } from 'rxjs';
import { NotificationService } from '@shared/services/notification.service';

@Component({
    imports: [TuiButton],
    selector: 'app-next-tack-button',
    styleUrl: './next-tack-button.scss',
    templateUrl: './next-tack-button.html',
})
export class NextTackButton {
    constructor(
        protected productLineService: ProductLineService,
        private notificationService: NotificationService,
    ) {}

    runNextTact() {
        const result = this.productLineService.runNextTact();
        if (!result) {
            const duration = DEFAUL_NOTIFICATION_DURATION;
            this.notificationService
                .showMessage(`Не удалось запустить следующий такт`, {
                    appearance: 'negative',
                    autoClose: duration,
                })
                .pipe(takeUntil(timer(duration)))
                .subscribe();
        }
    }
}
