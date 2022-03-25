import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = {
    id: '',
    name: ''
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name']
    // }
    this.route.params.subscribe((value) => {
      this.user.id = value.id;
      this.user.name = value.name
    })

    console.log(this.user)
  }

}
