import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentLang = 'bg';

  readonly footerAboutTitleBg = 'Про дринк енд драйв - за нас';
  readonly footerAboutTitleEn = 'Pro Drink and Drive - About us';
  readonly footerAboutTextBg =
    'Поставили сме си за цел да направим града и пътищата в него по-безопасни и сигурни за самите нас, за близките ни, за хората, които обичаме и ни обичат! Не толерираме шофиране в нетрезво състояние! За нас това не е само работа, но и мисия!';
  readonly footerAboutTextEn =
    "We have set ourselves the goal of making the city and its roads safer for ourselves, for our loved ones, for the people we love and who love us! We do not tolerate drunk driving! For us this is not just a job, but a mission!";
  readonly footerContactsTitleBg = 'Контакти';
  readonly footerContactsTitleEn = 'Contacts';
  readonly footerPhoneLine = 'Телефон: 0988744665 | 0958432838';
  readonly footerEmailLine = 'Имейл: pro-drink-and-drive@gmail.com';
  readonly footerWebsiteLine = 'Уебсайт: prodrinkanddrive.bg';
  readonly footerPhoneLineEn = 'Phone: 0988744665 | 0958432838';
  readonly footerEmailLineEn = 'Email: pro-drink-and-drive@gmail.com';
  readonly footerWebsiteLineEn = 'Website: prodrinkanddrive.bg';

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'bg';
    this.translate.onLangChange.subscribe((e) => (this.currentLang = e.lang));
  }
}
