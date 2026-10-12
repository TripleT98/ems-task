import { Component, computed, input } from '@angular/core';
import { statusText, DefaultStatus, colors } from '@entities/product/consts/statuses';
import { ProductStatus } from '@entities/product/models/product.model';
import { TuiBadge, TuiStatus } from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiStatus],
    selector: 'app-ui-product-status',
    styleUrl: './ui-product-status.scss',
    templateUrl: './ui-product-status.html',
})
export class UiProductStatus {
    status = input<ProductStatus>();
    withText = input<boolean>(true);

    protected readonly text = computed(() =>
        statusText.get(this.status() || DefaultStatus.DEAFAULT),
    );
    protected readonly color = computed(() => colors.get(this.status() || DefaultStatus.DEAFAULT));
}
