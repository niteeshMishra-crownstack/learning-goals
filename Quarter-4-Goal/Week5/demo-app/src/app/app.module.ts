import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { ChildComponent } from './child/child.component';
import { ElementStyleDirective } from './element-style.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ChildComponent,
    ElementStyleDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
