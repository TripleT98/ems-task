import { inject, Service } from '@angular/core';
import { TuiNotificationOptions, TuiNotificationService } from '@taiga-ui/core';

@Service()
export class NotificationService {
    private tuiNotificationService = inject(TuiNotificationService);

    showMessage(message: string, options?: Partial<TuiNotificationOptions>) {
        return this.tuiNotificationService.open(message, options);
    }
}
