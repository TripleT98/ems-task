import { Component, computed, input } from '@angular/core';
import { Product, ProductStatus } from '@entities/product/models/product.model';
import { UiEmptyContent } from '@shared/ui/ui-empty-content/ui-empty-content';
import { UiProductStatus } from '@shared/ui/ui-product-status/ui-product-status';
import { TuiDataList } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

type StatusInfo = {
    status: ProductStatus;
    amount: number;
};

@Component({
    imports: [TuiDataList, TuiCardLarge, UiProductStatus, TuiHeader, UiEmptyContent],
    selector: 'app-ui-product-line-info',
    styleUrl: './ui-product-line-info.scss',
    templateUrl: './ui-product-line-info.html',
})
export class UiProductLineInfo {
    products = input.required<Product[]>();

    protected readonly statusInfo = computed<StatusInfo[]>(() =>
        this.products()
            .reduce<StatusInfo[]>((acc, { status }) => {
                const info = acc.find((info) => info.status === status);
                if (info) {
                    info.amount++;
                } else {
                    acc.push({ status, amount: 1 });
                }
                return acc;
            }, [])
            .sort((a, b) => (a.amount === b.amount ? 0 : a.amount < b.amount ? 1 : -1)),
    );
}
