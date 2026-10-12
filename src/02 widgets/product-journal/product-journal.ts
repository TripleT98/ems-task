import { Component, computed } from '@angular/core';
import { ProductJournalService } from '@entities/journal/product-journal/services/product-journal.service';
import { UiProductJournal } from '@entities/journal/product-journal/ui/ui-product-journal/ui-product-journal';
import { TuiCardLarge } from '@taiga-ui/layout';
import { ClearJournalButton } from '@features/product-journal/clear-journal/clear-journal';

@Component({
    imports: [UiProductJournal, TuiCardLarge, ClearJournalButton],
    selector: 'app-product-journal',
    styleUrl: './product-journal.scss',
    templateUrl: './product-journal.html',
})
export class ProductJournal {
    protected readonly logEntries = computed(() =>
        [...this.productJournalService.logEntries()].reverse(),
    );
    protected readonly title = 'Журнал событий';

    constructor(private productJournalService: ProductJournalService) {}
}
