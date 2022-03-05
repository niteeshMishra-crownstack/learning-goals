import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() data;
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();
  message = 'Mesage from child : Hello there'
  message2 = "messege from child for parent component"

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.messageEvent.emit(this.message2)
  }

  helloWorld() {
    alert("I am a method written in child-component but accessible in parent component by using @ViewChild Decorator and a template reference variable in my selector tag")
  }

}
