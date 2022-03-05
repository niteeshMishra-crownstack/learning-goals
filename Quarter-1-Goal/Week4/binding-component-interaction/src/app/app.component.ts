import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'binding-component-interaction';
  text = "Text coming from component class to DOM"
  imgURl = "https://picsum.photos/50/50"
  siteUrl = "https://www.google.com/"
  initialText = "initial text of input field"
  flag: boolean = false;
  userName: string
  empName: string;
  parentMessage = "message from parent"
  message: string
  dataFromChild: string = ''

  data = ['ram', 'shyam', 'mohan']

  @ViewChild(ChildComponent) childMessage //here type is ChildComponent bcz you are refering to a child 
  //'childComponent' template reference variable
  @ViewChild('emptyDiv') emptyDiv: ElementRef //here type is elementRef bcz you are accessing an element from DOM 
  @ViewChild('firstName') firstName: ElementRef  //here type is elementRef bcz you are accessing an element from DOM 
  @ViewChild('childComponent') childComponent: ChildComponent // here type is ChildComponent bcz you are refering to a child 
  //'childComponent' template reference variable 

  @ViewChildren('inputValue') inputValue: QueryList<ElementRef>
  @ViewChild('elementA', { static: true }) elementA: ElementRef;
  @ViewChild('elementB', { static: true }) elementB: ElementRef;



  show() {
    alert("Show button clicked")
    //toggle the button 

    this.flag = !this.flag
  }

  updateUsername(event) {
    console.log(event)
    this.userName = (event.target as HTMLInputElement).value;
    console.log(this.userName)
  }

  ngAfterViewInit(): void {
    this.message = this.childMessage.message

    // this.elementA.nativeElement.innerHTML = "value of a from ngAfterViewInit"
    // this.elementB.nativeElement.innerHTML = "value of b from ngAfterViewInit"
  }

  ngOnInit(): void {
    this.elementA.nativeElement.innerHTML = "value of a from ngOnInIt"
    this.elementB.nativeElement.innerHTML = "value of b from ngOnInIt"
  }

  receiveMessage(event) {
    console.log(event)
    this.dataFromChild = event
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
