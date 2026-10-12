import { Component, input } from '@angular/core';
import { TuiBlockStatus } from '@taiga-ui/layout';

@Component({
    imports: [TuiBlockStatus],
    selector: 'app-ui-empty-content',
    styleUrl: './ui-empty-content.scss',
    templateUrl: './ui-empty-content.html',
})
export class UiEmptyContent {
    text = input<string>('Здесь пока ничего нет');
    src = input<string>('assets/svg/empty-content-fallback.svg');
    imageSize = input<number>(200);
}
