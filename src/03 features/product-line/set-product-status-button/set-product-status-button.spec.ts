import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetProductStatusButton } from './set-product-status-button';

describe('SetProductStatus', () => {
    let component: SetProductStatusButton;
    let fixture: ComponentFixture<SetProductStatusButton>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SetProductStatusButton],
        }).compileComponents();

        fixture = TestBed.createComponent(SetProductStatusButton);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
