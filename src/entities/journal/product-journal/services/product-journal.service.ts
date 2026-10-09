import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { ProductJounralStoreService } from "@entities/journal/product-journal/services/product-journal-store.service";
import { ProductLineEvent } from "@entities/product/models/product-line.model";
import { ProductLineService } from "@entities/product/services/product-line.service";

Injectable()
export class ProductJournalService {
    constructor(
        private productLineService: ProductLineService,
        private productJounralStoreService: ProductJounralStoreService
    ){}

    observeEvents() {
        return this.productLineService.eventObs
            .pipe(
                tap((event) => {
                    this.productJounralStoreService.put(event)
                })
            )
    }
}