import { ProductJournalService } from '@entities/journal/product-journal/services/product-journal.service';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { Component } from '@angular/core';
import { ProductStatus } from '@entities/product/models/product.model';
import { DatePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UiProduct } from '@entities/product/ui/ui-product/ui-product';

@Component({
    imports: [DatePipe, UiProduct],
    selector: 'app-main-page',
    styleUrl: './main-page.scss',
    templateUrl: './main-page.html',
})
export default class MainPage {
    constructor(
        protected productLineService: ProductLineService,
        protected productJournalService: ProductJournalService,
    ) {
        this.productJournalService.observeEvents().pipe(takeUntilDestroyed()).subscribe();
    }

    addProduct() {
        this.productLineService.addProduct({
            id: crypto.randomUUID(),
            status: ProductStatus.IN_QUEUE,
            timestamp: new Date().getTime(),
        });
    }

    runNextTact() {
        this.productLineService.runNextTact();
    }
}
