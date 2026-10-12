import { signal } from '@angular/core';
import { StorageService } from '@shared/models/storage.model';

export abstract class EntityStore<T, D extends string> {
    private readonly _entities = signal<T[]>([]);
    readonly entities = this._entities.asReadonly();

    constructor(
        private readonly idParam: keyof T,
        private readonly storage?: StorageService<D>,
        private readonly storageKey?: D,
    ) {
        this.initStorage();
    }

    set(items: T[]) {
        return this.updateStorage([...items]);
    }

    patch(value: T[typeof this.idParam], patchedItem: Partial<T>) {
        const itemToPatch = this.findItem(value);
        if (!itemToPatch) {
            return false;
        }
        const newItems = this.entities().map((item) =>
            this.compareItems(itemToPatch, item) ? { ...item, ...patchedItem } : item,
        );
        const status = this.updateStorage(newItems);
        return status;
    }

    put(newItem: T) {
        const newItems = [...this.entities(), newItem];
        const status = this.updateStorage(newItems);
        return status;
    }

    delete(value: T[typeof this.idParam]) {
        const itemToDelete = this.findItem(value);
        if (!itemToDelete) {
            return false;
        }
        const newItems = this.entities().reduce<T[]>((acc, item) => {
            if (this.compareItems(itemToDelete, item)) {
                return acc;
            } else {
                return [...acc, item];
            }
        }, []);

        const status = this.updateStorage(newItems);
        return status;
    }

    private initStorage() {
        if (this.storage && this.storageKey) {
            const items = this.storage.get<T[]>(this.storageKey);
            if (items) {
                this._entities.set(items);
                return true;
            }
            return false;
        } else {
            return true;
        }
    }

    private updateStorage(items: T[]) {
        if (this.storage && this.storageKey) {
            const status = this.storage.set(this.storageKey, items);
            if (status) {
                this._entities.set(items);
            }
            return status;
        } else {
            this._entities.set(items);
            return true;
        }
    }

    findItem(value: T[typeof this.idParam]) {
        return this.entities().find((item) => item[this.idParam] === value);
    }

    abstract compareItems(item1: T, item2: T): boolean;
}
