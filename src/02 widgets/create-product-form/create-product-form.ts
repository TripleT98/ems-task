import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    computed,
    input,
    output,
    signal,
} from '@angular/core';
import { FormField, disabled, form, required, validate } from '@angular/forms/signals';
import { MaskitoDirective } from '@maskito/angular';
import type { MaskitoOptions } from '@maskito/core';
import { TuiButton, TuiTextfield, TuiInput, TuiIcon } from '@taiga-ui/core';
import { ProductStatus } from '@entities/product/models/product.model';
import { formatDate } from '@shared/utils/date';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { ProductLineService } from '@entities/product/services/product-line.service';
import { TuiTooltip } from '@taiga-ui/kit';
import { statusText } from '@entities/product/consts/statuses';
import { uniqueValueValidator } from '@shared/utils/validation';

export interface ProductDraft {
    id: string;
    timestamp: string;
    status: string;
}

@Component({
    selector: 'app-product-create-form',
    standalone: true,
    imports: [
        FormField,
        MaskitoDirective,
        TuiButton,
        TuiTextfield,
        TuiInput,
        TuiCardLarge,
        TuiTooltip,
        TuiIcon,
        TuiHeader,
    ],
    templateUrl: './create-product-form.html',
    styleUrl: './create-product-form.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProductFormComponent implements OnInit, OnDestroy {
    existingIds = computed(() =>
        this.productLineService.productsOnLine().map((product) => product.id),
    );
    productCreated = output<ProductDraft>();

    private readonly now = signal(new Date());

    readonly productModel = signal<ProductDraft>({
        id: '',
        timestamp: formatDate(this.now()),
        status: statusText.get(ProductStatus.IN_QUEUE) as string,
    });

    readonly productForm = form(this.productModel, (path) => {
        required(path.id, {
            message: 'Введите ID продукта',
        });

        uniqueValueValidator(
            () => this.existingIds(),
            (id: string) => id,
            'Продукт с таким ID уже существует',
        )(path.id);

        disabled(path.timestamp);
        disabled(path.status);
    });

    readonly idMask: MaskitoOptions = {
        mask: ['P', '-', /\d/, /\d/, /\d/, /\d/, /\d/],
    };

    private timerId?: ReturnType<typeof setInterval>;

    constructor(protected productLineService: ProductLineService) {}

    ngOnInit(): void {
        this.timerId = setInterval(() => {
            const currentDate = new Date();

            this.now.set(currentDate);

            this.productModel.update((product) => ({
                ...product,
                timestamp: formatDate(currentDate),
            }));
        }, 1000);
    }

    ngOnDestroy(): void {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
        }
    }

    submit(): void {
        if (this.productForm().invalid()) {
            this.productForm.id().markAsTouched();
            return;
        }
        const producData = {
            id: this.productModel().id,
            timestamp: new Date().getTime(),
            status: ProductStatus.IN_QUEUE,
        };

        this.productCreated.emit({
            ...this.productModel(),
        });

        this.productLineService.addProduct(producData);

        this.productForm.id().reset('');
    }
}
