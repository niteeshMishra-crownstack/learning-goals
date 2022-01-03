import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() message;
  @Output() callParent = new EventEmitter()
  constructor() { }

  helloWorld() {
    alert("I am a method written in child-component but accessible in parent component by using @ViewChild Decorator and a template reference variable in my selector tag")
  }

  ngOnInit(): void {
  }

}
