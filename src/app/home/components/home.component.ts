import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items = [
    { title: 'https://news-media.stanford.edu/wp-content/uploads/2018/08/14145128/Mars_NASA_PIA00407-full2.jpg' },
    { title: 'https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/ts-space-sun-and-solar-viewing-facts-versus-fiction.jpg?itok=gaBs6QMS' },
    { title: 'https://accelerator-origin.kkomando.com/wp-content/uploads/2018/03/dreamstime_m_111063495.jpg' }
  ]
  
  // addSlide() {
  //   this.items.push({
  //     title: `Slide 4`
  //   });
  // }

}
