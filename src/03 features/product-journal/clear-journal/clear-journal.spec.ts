import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClearJournal } from './clear-journal';

describe('ClearJournal', () => {
    let component: ClearJournal;
    let fixture: ComponentFixture<ClearJournal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ClearJournal],
        }).compileComponents();

        fixture = TestBed.createComponent(ClearJournal);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
