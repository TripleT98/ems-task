import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClearLineButton } from './clear-line-button';

describe('ClearLineButton', () => {
    let component: ClearLineButton;
    let fixture: ComponentFixture<ClearLineButton>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ClearLineButton],
        }).compileComponents();

        fixture = TestBed.createComponent(ClearLineButton);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
