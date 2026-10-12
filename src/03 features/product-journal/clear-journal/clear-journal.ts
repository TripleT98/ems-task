import { Component } from '@angular/core';
import { ProductJournalService } from '@entities/journal/product-journal/services/product-journal.service';
import { TuiButton } from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    selector: 'app-clear-journal-button',
    styleUrl: './clear-journal.scss',
    templateUrl: './clear-journal.html',
})
export class ClearJournalButton {
    constructor(private productJournalService: ProductJournalService) {}

    clearJournal() {
        this.productJournalService.clearJournal();
    }
}
