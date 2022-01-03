import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rating = 0;

  reviews = [
    {
      "name": "Name of user 1",
      "reviewSummary": "Summary of review 1.",
      "rating": 2.5,
      "reviewMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus."
    },
    {
      "name": "Name of user 2",
      "reviewSummary": "Summary of review 2.",
      "rating": 3.45,
      "reviewMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus."
    },
    {
      "name": "Name of user 3",
      "reviewSummary": "Summary of review 3.",
      "rating": 0.5,
      "reviewMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }


  onClick(ratingValue) {
    this.rating = ratingValue;
  }


}



