import { ProductJournalService } from '@entities/journal/product-journal/services/product-journal.service';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductLine } from '@widgets/product-line/product-line';
import { ProductJournal } from '@widgets/product-journal/product-journal';
import { CreateProductFormComponent } from '@widgets/create-product-form/create-product-form';

@Component({
    imports: [ProductLine, ProductJournal, CreateProductFormComponent],
    selector: 'app-main-page',
    styleUrl: './main-page.scss',
    templateUrl: './main-page.html',
})
export default class MainPage {
    constructor(protected productJournalService: ProductJournalService) {
        this.productJournalService.observeEvents().pipe(takeUntilDestroyed()).subscribe();
    }
}
