import { Component, OnInit } from '@angular/core';

import { SolarSystemObject } from '../../core/models/object.model';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {

  earth: SolarSystemObject;

  constructor() { 
    this.earth = new SolarSystemObject(
      'Earth',
      '4.543E9 years old',
      'https://accelerator-origin.kkomando.com/wp-content/uploads/2018/03/dreamstime_m_111063495.jpg',
      'The Earth is everybody\'s homeworld. Since time began, abusive beings owned the planet. These abusive beings are like the angsty and rebellious grandchildren that loves to shout at their grandma. With that analogy, everyone\'s grandma would have already looked old as the Mother Earth.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/320px-The_Earth_seen_from_Apollo_17.jpg'
    );
  }

  ngOnInit() {}

}
