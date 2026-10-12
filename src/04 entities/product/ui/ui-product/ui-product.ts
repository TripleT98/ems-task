import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Product } from '@entities/product/models/product.model';
import { UiProductStatus } from '@shared/ui/ui-product-status/ui-product-status';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardMedium } from '@taiga-ui/layout';

@Component({
    imports: [UiProductStatus, TuiAppearance, TuiCardMedium, TuiTitle, DatePipe],
    selector: 'app-ui-product',
    styleUrl: './ui-product.scss',
    templateUrl: './ui-product.html',
})
export class UiProduct {
    product = input.required<Product>();
}
