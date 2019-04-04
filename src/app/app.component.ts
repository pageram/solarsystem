import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solarsystem';
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;
  constructor() {

  }

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.context.beginPath();
    this.context.arc(75, 100, 10, 0, Math.PI*2, true); 
    this.context.closePath();
    this.context.fill();
  }
}
