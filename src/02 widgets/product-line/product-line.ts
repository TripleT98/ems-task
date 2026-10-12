import { Component, computed } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { ProductStatus } from '@entities/product/models/product.model';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { UiProductStatus } from '@shared/ui/ui-product-status/ui-product-status';
import { TuiButton, TuiDropdown, TuiScrollbar, TuiTitle } from '@taiga-ui/core';
import { ClearLineButton } from '@features/product-line/clear-line-button/clear-line-button';
import { NextTackButton } from '@features/product-line/next-tack-button/next-tack-button';
import { AddProductButton } from '@features/product-line/add-product-button/add-product-button';
import { UiProduct } from '@entities/product/ui/ui-product/ui-product';
import { SetProductStatusButton } from '@features/product-line/set-product-status-button/set-product-status-button';
import { RemoveProductButton } from '@features/product-line/remove-product-button/remove-product-button';

@Component({
    imports: [
        UiProductStatus,
        TuiCardLarge,
        TuiHeader,
        NgTemplateOutlet,
        TuiTitle,
        AddProductButton,
        ClearLineButton,
        NextTackButton,
        UiProduct,
        TuiScrollbar,
        TuiDropdown,
        TuiButton,
        SetProductStatusButton,
        NgTemplateOutlet,
        RemoveProductButton,
    ],
    selector: 'app-product-line',
    styleUrl: './product-line.scss',
    templateUrl: './product-line.html',
})
export class ProductLine {
    protected readonly products = computed(() =>
        [...this.productLineService.productsOnLine()].reverse(),
    );

    protected readonly productStatutses = [
        ProductStatus.IN_QUEUE,
        ProductStatus.CHECKED,
        ProductStatus.REJECTED,
    ];

    protected readonly ProductStatus = ProductStatus;

    constructor(protected productLineService: ProductLineService) {}
}
