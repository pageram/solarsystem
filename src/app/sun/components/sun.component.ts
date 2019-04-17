import { Component, OnInit } from '@angular/core';

import { SolarSystemObject } from '../../core/models/object.model';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.css']
})
export class SunComponent implements OnInit {

  sun: SolarSystemObject;

  constructor() {
    this.sun = new SolarSystemObject(
      'The Sun',
      '4.603E9 years old',
      'https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/ts-space-sun-and-solar-viewing-facts-versus-fiction.jpg?itok=gaBs6QMS',
      'The sun will fry you in no time. Some people think The Sun is the kind of its own, but really, suns are stars.',
      'https://cdn.mos.cms.futurecdn.net/YhZo9RHnU6uvcFbwWsp62e-320-80.jpg'
    );
  }

  ngOnInit() {}

}
