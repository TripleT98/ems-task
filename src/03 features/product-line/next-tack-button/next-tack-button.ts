import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { ProductLineService } from '@entities/product/services/product-line.service';

@Component({
    imports: [TuiButton],
    selector: 'app-next-tack-button',
    styleUrl: './next-tack-button.scss',
    templateUrl: './next-tack-button.html',
})
export class NextTackButton {
    constructor(private productLineService: ProductLineService) {}

    runNextTact() {
        this.productLineService.runNextTact();
    }
}
