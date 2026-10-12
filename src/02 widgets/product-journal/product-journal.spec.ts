import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductJournal } from './product-journal';

describe('ProductJournal', () => {
    let component: ProductJournal;
    let fixture: ComponentFixture<ProductJournal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductJournal],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductJournal);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
