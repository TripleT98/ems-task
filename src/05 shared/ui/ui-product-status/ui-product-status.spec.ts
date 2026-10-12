import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiProductStatus } from './ui-product-status';

describe('UiProductStatus', () => {
    let component: UiProductStatus;
    let fixture: ComponentFixture<UiProductStatus>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UiProductStatus],
        }).compileComponents();

        fixture = TestBed.createComponent(UiProductStatus);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
