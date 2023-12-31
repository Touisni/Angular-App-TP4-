import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage() {
    this.translate.use(this.selectedLanguage);
  }
  
}
