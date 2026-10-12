import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { ProductLineService } from '@entities/product/services/product-line.service';

@Component({
    imports: [TuiButton],
    selector: 'app-clear-line-button',
    styleUrl: './clear-line-button.scss',
    templateUrl: './clear-line-button.html',
})
export class ClearLineButton {
    constructor(private productLineService: ProductLineService) {}

    clearLine() {
        this.productLineService.clearLine();
    }
}
