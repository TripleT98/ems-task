import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiProduct } from './ui-product';

describe('UiProduct', () => {
    let component: UiProduct;
    let fixture: ComponentFixture<UiProduct>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UiProduct],
        }).compileComponents();

        fixture = TestBed.createComponent(UiProduct);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
