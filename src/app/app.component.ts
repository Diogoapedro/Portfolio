import { Component, ElementRef } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FootbarComponent } from "./components/footbar/footbar.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FootbarComponent, AboutMeComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private elRef:ElementRef
  ) {}
  title = 'portfolio';

  ngAfterViewInit() {
    let mainTitle = this.elRef.nativeElement.getElementsByClassName('main-title')
    let links = this.elRef.nativeElement.getElementsByClassName("nav-link")
    mainTitle = Array.prototype.slice.call(mainTitle)
    links = Array.prototype.slice.call(links)

    let indexMap = new Map<string, number>();
    mainTitle.forEach((element: any, index: any) => {
      indexMap.set(element.id, index)
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry)
        let i:number = indexMap.get(entry.target.id)!
        links[i].classList.toggle("fixed-underline", entry.isIntersecting)
      })
    })

    mainTitle.forEach((title: Element) => {
      observer.observe(title)
    })
  }
}
