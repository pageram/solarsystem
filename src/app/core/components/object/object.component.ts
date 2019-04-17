import { Component, OnInit, Input } from '@angular/core';

import { SolarSystemObject } from '../../models/object.model';

@Component({
  selector: 'solar-system-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class SolarSystemObjectComponent {

  @Input() object: SolarSystemObject;

  constructor() {}

  ngOnInit() {}

}
