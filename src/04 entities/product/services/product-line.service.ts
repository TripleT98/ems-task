import { computed, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product, ProductStatus } from '@entities/product/models/product.model';
import {
    ProductEventType,
    ProductLineEvent,
    ProductLineEventCreator,
} from '@entities/product/models/product-line.model';
import { ProductsStoreService } from './products-store.service';

@Injectable()
export class ProductLineService {
    readonly productsOnLine = computed(() => this.productsStoreService.entities());

    private readonly event$ = new Subject<ProductLineEvent>();
    readonly eventObs = this.event$.asObservable();

    constructor(private productsStoreService: ProductsStoreService) {}

    addProduct(product: Product) {
        const result = this.productsStoreService.put(product);
        if (result) {
            this.event$.next(ProductLineEventCreator.addEvent(product));
        }
        return result;
    }

    setProductStatus(id: string, status: ProductStatus) {
        const productBefore = this.productsStoreService.findItem(id);
        const result = this.productsStoreService.patch(id, { status });
        if (result && productBefore) {
            this.event$.next(
                ProductLineEventCreator.statusChangeEvent(
                    { ...productBefore, status },
                    productBefore.status,
                ),
            );
        }
        return result;
    }

    runNextTact() {
        const firstItem = this.productsStoreService.entities()[0];
        const result = this.productsStoreService.delete(firstItem.id);
        if (result) {
            this.event$.next(ProductLineEventCreator.removeEvent(firstItem));
        }
        return result;
    }

    removeProduct(productId: string) {
        const product = this.productsStoreService.findItem(productId);
        if (!product) {
            return false;
        }

        const result = this.productsStoreService.delete(productId);
        if (result) {
            this.event$.next(
                ProductLineEventCreator.removeEvent(product, ProductEventType.REMOVED),
            );
        }
        return result;
    }

    clearLine() {
        const result = this.productsStoreService.set([]);
        if (result) {
            this.event$.next(ProductLineEventCreator.clearEvent());
        }
        return result;
    }
}
