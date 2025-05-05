import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-home-page',
  imports: [AboutMeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
