import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav
  title = 'theme-main-project';

  showThemeOptions: boolean = false;

  themeChange(selectedTheme) {
    console.log('theme change worked');
    document.querySelector('body').setAttribute('theme', selectedTheme);
    this.showThemeOptions = false;
  }



  constructor(private observer: BreakpointObserver) {

  }
  ngOnInit() {


  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close()
      }
      else {

        this.sidenav.mode = 'side';
        this.sidenav.open()
      }
    })
  }
};



