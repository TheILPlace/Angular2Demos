import { Component, LOCALE_ID, Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = [
    { code: 'en', label: 'English'},
    { code: 'he', label: 'עברית'},
    { code: 'fr', label: 'Français'}
  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) {}
}