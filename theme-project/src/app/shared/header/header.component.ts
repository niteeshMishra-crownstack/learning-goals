import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDark: boolean = false;
  themeScheme: string = 'custom';

  constructor() {}

  ngOnInit(): void {}
  themeChange(isSelect?: boolean) {
    console.log('theme change worked');
    this.isDark = !this.isDark;

    if (this.isDark || isSelect) {
      console.log('if');
      this.isDark = true;
      document
        .querySelector('body')
        .setAttribute('theme', `${this.themeScheme}-dark`);
    } else {
      console.log('else');
      document.querySelector('body').removeAttribute('theme');
    }
  }

  themeStyle(themes: string) {
    this.themeScheme = themes;
    this.themeChange(true);
  }
}
