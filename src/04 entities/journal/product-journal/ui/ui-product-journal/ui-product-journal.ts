import { DatePipe } from '@angular/common';
import { TuiHint, TuiScrollbar, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiTable } from '@taiga-ui/addon-table';
import { GetLogEntryTextPipe } from '@entities/journal/product-journal/pipes/get-log-entry-text.pipe';
import { Component, input } from '@angular/core';
import { ProductLineEvent } from '@entities/product/models/product-line.model';
import { UiProductStatus } from '@shared/ui/ui-product-status/ui-product-status';
import { UiEmptyContent } from '@shared/ui/ui-empty-content/ui-empty-content';

@Component({
    imports: [
        TuiTable,
        TuiTitle,
        TuiHeader,
        TuiHint,
        UiEmptyContent,
        UiProductStatus,
        GetLogEntryTextPipe,
        DatePipe,
        TuiScrollbar,
    ],
    selector: 'app-ui-product-journal',
    styleUrl: './ui-product-journal.scss',
    templateUrl: './ui-product-journal.html',
})
export class UiProductJournal {
    title = input<string>('');
    logEntries = input.required<ProductLineEvent[]>();
}
