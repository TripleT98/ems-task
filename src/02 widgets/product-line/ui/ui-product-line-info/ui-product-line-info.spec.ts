import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiProductLineInfo } from './ui-product-line-info';

describe('UiProductLineInfo', () => {
    let component: UiProductLineInfo;
    let fixture: ComponentFixture<UiProductLineInfo>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UiProductLineInfo],
        }).compileComponents();

        fixture = TestBed.createComponent(UiProductLineInfo);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
