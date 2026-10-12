import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ProductLineEvent } from '@entities/product/models/product-line.model';
import { EntityStore } from '@shared/models/entities-storage.model';
import { LocalStorageKeys } from '@shared/models/local-storage.models';
import { StorageService } from '@shared/models/storage.model';

const DEFAUL_LENGTH = 20;
export const JOURNAL_MAX_LENGTH = new InjectionToken<number>('JOURNAL_MAX_LENGTH', {
    factory: () => DEFAUL_LENGTH,
});

@Injectable()
export class ProductJounralStoreService extends EntityStore<
    ProductLineEvent,
    LocalStorageKeys.PRODUCTS_JOURNAL
> {
    constructor(@Inject(JOURNAL_MAX_LENGTH) private journalMaxLength: number) {
        super('id', new StorageService(window.localStorage), LocalStorageKeys.PRODUCTS_JOURNAL);
    }

    override put(newItem: ProductLineEvent): boolean {
        super.put(newItem);
        const currEvents = this.entities();
        if (currEvents.length > this.journalMaxLength) {
            return this.delete(currEvents[0].id);
        }
        return true;
    }

    override compareItems(item1: ProductLineEvent, item2: ProductLineEvent) {
        return item1.id === item2.id;
    }
}
