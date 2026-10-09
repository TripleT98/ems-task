import { Routes } from '@angular/router';
import { ProductJounralStoreService } from '@entities/journal/product-journal/services/product-journal-store.service';
import { ProductJournalService } from '@entities/journal/product-journal/services/product-journal.service';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { ProductsStoreService } from '@entities/product/services/products-store.service';
import { AppRoutes } from '@shared/routes/app.routes.types';

export const routes: Routes = [
    {
        path: AppRoutes.MAIN_ROUTE,
        providers: [
            ProductsStoreService,
            ProductLineService,
            ProductJounralStoreService,
            ProductJournalService,
        ],
        loadComponent: () => import('@pages/main-page/main-page'),
    },
];
