import { Injectable, signal, WritableSignal } from "@angular/core";
import { Product, ProductStatus } from "@entities/product/models/product.model";
import { EntityStore } from "@shared/models/entities-storage.model";
import { LocalStorageKeys } from "@shared/models/local-storage.models";
import { StorageService } from "@shared/models/storage.model";

@Injectable()
export class ProductsStoreService extends EntityStore<Product, LocalStorageKeys.PRODUCTS> {
    constructor(){
        super('id', new StorageService(window.localStorage), LocalStorageKeys.PRODUCTS)
    }

    override compareItems(item1: Product, item2: Product) {
        return item1.id === item2.id
    }
}