import { ProductJournalService } from '@entities/journal/product-journal/services/product-journal.service';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductLine } from '@widgets/product-line/product-line';
import { ProductJournal } from '@widgets/product-journal/product-journal';
import { CreateProductFormComponent } from '@widgets/create-product-form/create-product-form';
import { UiProductLineInfo } from '@widgets/product-line/ui/ui-product-line-info/ui-product-line-info';
import { ProductLineService } from '@entities/product/services/product-line.service';

@Component({
    imports: [ProductLine, ProductJournal, CreateProductFormComponent, UiProductLineInfo],
    selector: 'app-main-page',
    styleUrl: './main-page.scss',
    templateUrl: './main-page.html',
})
export default class MainPage {
    constructor(
        protected productJournalService: ProductJournalService,
        protected productLineService: ProductLineService,
    ) {
        this.productJournalService.observeEvents().pipe(takeUntilDestroyed()).subscribe();
    }
}
