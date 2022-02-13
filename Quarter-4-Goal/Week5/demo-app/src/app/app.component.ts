import { Component, HostListener, ElementRef, ViewChild, ViewChildren, QueryList, OnInit, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ProductsComponent } from './products/products.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'demo-app';
  isActive = true;
  todaysDate;
  colorChange = true;
  imageUrl = "https://picsum.photos/200/300";
  theHtmlString = "<h1>I am h1 <h2>I am h2 </h2></h1>"
  isLoggedIn: boolean = true;
  isColorChanged: boolean = true;
  message: string = "message from parent"
  data = [2, 4, 5, "gg", "gkg", 3, 202]
  userText = ""
  dropDownItems = ["orange", "banana", "plum", "kivi"]
  items = ["item1", "item2", "item3", "item4", "item5"]
  countries = ["India", "England", "USA"]
  countrySelected: any
  states = []
  @ViewChild('emptyDiv') emptyDiv: ElementRef
  @ViewChild('firstName') firstName: ElementRef  //here type is elementRef bcz you are accessing an element from DOM 
  @ViewChild('childComponent') childComponent: ChildComponent // here type is ChildComponent bcz you are refering to a child 
  //'childComponent' template reference variable 

  @ViewChildren('inputValue') inputValue: QueryList<ElementRef>
  @ViewChild('elementA', { static: true }) elementA: ElementRef;
  @ViewChild('elementB', { static: false }) elementB: ElementRef;



  constructor() {
    this.todaysDate = new Date()

  }

  ngOnInit() {
    this.elementA.nativeElement.innerHTML = "value of a from ngOnInIt"
    this.elementB.nativeElement.innerHTML = "value of b from ngOnInIt"

  }

  ngAfterViewInit() {
    this.elementA.nativeElement.innerHTML = "value of  A from ngAfterViewInIt"
    this.elementB.nativeElement.innerHTML = "value of B from ngAfterViewInIt"

  }

  handleChange() {
    console.log(this.userText)
  }

  callParent() {
    alert("Data are coming from parent component" + this.data)
  }

  changeLoggedType() {
    this.isLoggedIn = !this.isLoggedIn;//if isLoggedIn is true on button click its false and vice versa
  }

  changeColor() {
    this.isColorChanged = !this.isColorChanged
  }

  changedCountry() {
    if (this.countrySelected === "USA")
      this.states = ["Telangana", "Mp", "UP", "Goa"]

    else {
      this.states = ["Texas", "New Jersy"]
    }
  }


  submit(event) {
    console.log(event)
  }



  @HostListener('click') whenClicked() {
    console.log("HostListener has listen to your clicked event")
  }

  @HostListener('window:scroll', ['$event']) pageScroll() {
    console.log("page scrolling")
  }

  setHtml() {
    this.emptyDiv.nativeElement.innerHTML = "Now div has something"
    this.emptyDiv.nativeElement.style.fontWeight = "bold"
  }

  getHtml() {
    alert(this.emptyDiv.nativeElement.innerHTML)
  }

  showName() {
    alert(this.firstName.nativeElement.value)
  }

  showEnteredValue() {
    this.inputValue.forEach((item) => {
      alert(item.nativeElement.value)
    })

  }

  callMethodFromChildComponent() {
    this.childComponent.helloWorld()
  }


}
