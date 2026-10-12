import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiEmptyContent } from './ui-empty-content';

describe('UiEmptyContent', () => {
    let component: UiEmptyContent;
    let fixture: ComponentFixture<UiEmptyContent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UiEmptyContent],
        }).compileComponents();

        fixture = TestBed.createComponent(UiEmptyContent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
