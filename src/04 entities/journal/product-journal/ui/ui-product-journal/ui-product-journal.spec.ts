import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiProductJournal } from './ui-product-journal';

describe('UiProductJournal', () => {
    let component: UiProductJournal;
    let fixture: ComponentFixture<UiProductJournal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UiProductJournal],
        }).compileComponents();

        fixture = TestBed.createComponent(UiProductJournal);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
