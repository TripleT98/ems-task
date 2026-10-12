import { computed, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { ProductJounralStoreService } from './product-journal-store.service';

@Injectable()
export class ProductJournalService {
    readonly logEntries = computed(() => this.productJounralStoreService.entities());

    constructor(
        private productLineService: ProductLineService,
        private productJounralStoreService: ProductJounralStoreService,
    ) {}

    observeEvents() {
        return this.productLineService.eventObs.pipe(
            tap((event) => {
                this.productJounralStoreService.put(event);
            }),
        );
    }

    clearJournal() {
        this.productJounralStoreService.set([]);
    }
}
