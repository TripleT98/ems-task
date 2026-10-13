import { Component, computed, effect } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { ProductStatus } from '@entities/product/models/product.model';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { UiProductStatus } from '@shared/ui/ui-product-status/ui-product-status';
import { TuiButton, TuiDropdown, TuiDropdownOpen, TuiScrollbar, TuiTitle } from '@taiga-ui/core';
import { ClearLineButton } from '@features/product-line/clear-line-button/clear-line-button';
import { NextTackButton } from '@features/product-line/next-tack-button/next-tack-button';
import { UiProduct } from '@entities/product/ui/ui-product/ui-product';
import { SetProductStatusButton } from '@features/product-line/set-product-status-button/set-product-status-button';
import { RemoveProductButton } from '@features/product-line/remove-product-button/remove-product-button';
import { UiEmptyContent } from '@shared/ui/ui-empty-content/ui-empty-content';
import { mergeMap, tap, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductEventType } from '@entities/product/models/product-line.model';

@Component({
    imports: [
        UiProductStatus,
        TuiCardLarge,
        TuiHeader,
        NgTemplateOutlet,
        TuiTitle,
        ClearLineButton,
        NextTackButton,
        UiProduct,
        TuiScrollbar,
        TuiDropdown,
        TuiDropdownOpen,
        TuiButton,
        SetProductStatusButton,
        NgTemplateOutlet,
        RemoveProductButton,
        UiEmptyContent,
    ],
    selector: 'app-product-line',
    styleUrl: './product-line.scss',
    templateUrl: './product-line.html',
})
export class ProductLine {
    protected readonly products = computed(() =>
        [...this.productLineService.productsOnLine()].reverse(),
    );
    protected readonly productStatutses = [
        ProductStatus.IN_QUEUE,
        ProductStatus.CHECKED,
        ProductStatus.REJECTED,
    ];
    protected readonly ProductStatus = ProductStatus;

    protected readonly freshIds = new Set<string>();
    protected readonly removedIds = new Set<string>();
    protected readonly autoRemovedIds = new Set<string>();

    protected readonly POP_ANIMATION_DURATION = 1000;

    protected readonly openedDropdowns: { [productId: string]: boolean } = {};

    constructor(private productLineService: ProductLineService) {
        this.observeLineEvents().pipe(takeUntilDestroyed()).subscribe();

        effect(() => {
            this.products().forEach(({ id }) => {
                if (!Object.prototype.hasOwnProperty.call(this.openedDropdowns, id)) {
                    this.toggleProductDropdownStatus(id, false);
                }
            });
        });
    }

    private observeLineEvents() {
        return this.productLineService.eventObs.pipe(
            mergeMap((event) => {
                switch (event.type) {
                    case ProductEventType.ADDED:
                        this.freshIds.add(event.productId);
                        break;
                }
                return timer(this.POP_ANIMATION_DURATION).pipe(
                    tap(() => {
                        switch (event.type) {
                            case ProductEventType.ADDED:
                                this.freshIds.delete(event.productId);
                                break;
                        }
                    }),
                );
            }),
        );
    }

    toggleProductDropdownStatus(productId: string, status: boolean) {
        this.openedDropdowns[productId] = status;
    }
}
