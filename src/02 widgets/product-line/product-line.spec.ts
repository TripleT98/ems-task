import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductLine } from './product-line';

describe('ProductLine', () => {
    let component: ProductLine;
    let fixture: ComponentFixture<ProductLine>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductLine],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductLine);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
