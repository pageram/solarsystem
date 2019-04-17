import { Component, OnInit } from '@angular/core';
import { SolarSystemObject } from 'src/app/core/models/object.model';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  mars: SolarSystemObject; 
  
  constructor() {
    this.mars = new SolarSystemObject (
      'Mars',
      '4.603E9 years old',
      'https://news-media.stanford.edu/wp-content/uploads/2018/08/14145128/Mars_NASA_PIA00407-full2.jpg',
      'People always loved Mars. If there would be some living organism in Mars\, clearly it would be annoyed because NASA and perhaps Elon Musk tries to steal its pleasure by exploiting its \'wetness\'.',
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Mars_Valles_Marineris.jpeg'
    )
  }

  ngOnInit() {}

}
