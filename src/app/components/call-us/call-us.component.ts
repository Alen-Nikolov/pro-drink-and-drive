import { Component, input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-call-us',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './call-us.component.html',
  styleUrl: './call-us.component.scss',
})
export class CallUsComponent {
  phoneNumber = input.required<string>();
  currentLang = 'bg';

  readonly callBtnBg = 'Обадете се';
  readonly callBtnEn = 'Call now';
  readonly callTextBg =
    'Забавлявали сте се до късно и сега трябва да се приберете? Направете поръчка при нас. Ще ви приберем в собствения ви автомобил!';
  readonly callTextEn =
    "Had a late night and need to get home? Place an order with us. We'll take you home in your own car!";

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'bg';
    this.translate.onLangChange.subscribe((e) => (this.currentLang = e.lang));
  }
}
