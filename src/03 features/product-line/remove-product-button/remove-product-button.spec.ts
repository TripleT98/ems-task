import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveProductButton } from './remove-product-button';

describe('RemoveProductButton', () => {
    let component: RemoveProductButton;
    let fixture: ComponentFixture<RemoveProductButton>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RemoveProductButton],
        }).compileComponents();

        fixture = TestBed.createComponent(RemoveProductButton);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
