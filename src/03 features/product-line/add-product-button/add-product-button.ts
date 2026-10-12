import { Component } from '@angular/core';
import { ProductStatus } from '@entities/product/models/product.model';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { TuiButton } from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    selector: 'app-add-product-button',
    styleUrl: './add-product-button.scss',
    templateUrl: './add-product-button.html',
    standalone: true,
})
export class AddProductButton {
    constructor(private productLineService: ProductLineService) {}

    addProduct() {
        this.productLineService.addProduct({
            id: crypto.randomUUID(),
            status: ProductStatus.IN_QUEUE,
            timestamp: new Date().getTime(),
        });
    }
}
