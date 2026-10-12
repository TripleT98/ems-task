import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NextTackButton } from './next-tack-button';

describe('NextTackButton', () => {
    let component: NextTackButton;
    let fixture: ComponentFixture<NextTackButton>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NextTackButton],
        }).compileComponents();

        fixture = TestBed.createComponent(NextTackButton);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
