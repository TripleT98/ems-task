import { Component, input } from '@angular/core';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { TuiButton, TuiButtonX } from '@taiga-ui/core';

@Component({
    imports: [TuiButtonX],
    selector: 'app-remove-product-button',
    styleUrl: './remove-product-button.scss',
    templateUrl: './remove-product-button.html',
})
export class RemoveProductButton {
    productId = input.required<string>();

    constructor(private productLineService: ProductLineService) {}

    removeProduct() {
        this.productLineService.removeProduct(this.productId());
    }
}
