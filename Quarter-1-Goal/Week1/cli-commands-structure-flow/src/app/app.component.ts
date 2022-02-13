import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cli-commands-structure-flow';
  isScroll: boolean
  scrollColumn() {
    this.isScroll = true;
  }

  columns = ["current", "01 OCT 2021 (EoD)", "02 oct 2021", "03 oct 2021", "04 oct 2021", "05 oct 2021"];
  rows = [["PROMO CC", "Rp 100.510.000", "Rp 99.000.000", "Rp 91.510.000", "Rp 91.510.000", "	Rp 91.510.000", "Rp 91.510.000"], ["PROMO UNILEVER", "	Rp 4.510.000", "Rp 3.510.000", "Rp 3.510.000", "Rp 2.500.000", "Rp 2.500.000", "Rp 2.000.000"], ["PAS PAYMENTS", "Rp 80.510.000", "Rp 80.510.000", "Rp 80.510.000", "Rp 80.510.000", "Rp 76.510.000", "Rp 70.510.000"]]

}
