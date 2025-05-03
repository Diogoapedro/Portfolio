import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  toggled: boolean = false;
  darkmode: boolean = false

  
  ngOnInit() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    document.body.classList.toggle('dark-theme', prefersDarkScheme.matches);
    this.darkmode = prefersDarkScheme.matches

    document.querySelectorAll(".nav-link").forEach(link => {
      if(window.location.href.includes(link.attributes.getNamedItem("href")?.value!)) {
        link.classList.add("fixed-underline");
      }
    })
  }
  
  ngAfterViewInit() {
    const navEl = document.getElementById('navbar')
    const themeSwitch = document.getElementById('theme-switch')

    window.addEventListener("click", () => {
      this.toggleDarkTheme()
    })

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        if(!navEl!.classList.contains('navbar-scrolled')) {
          navEl!.classList.add('navbar-scrolled');
        }
        navEl!.classList.add('tiny');
      } else if (window.scrollY < 80) {
        if(!this.toggled) {
          navEl!.classList.remove('navbar-scrolled');
        }
        navEl!.classList.remove('tiny');
      }
    });
  }

  backColor() {
    const navEl = document.getElementById('navbar');
    if (this.toggled) {
      if(!navEl!.classList.contains('tiny')) {
        navEl!.classList.remove('navbar-scrolled');
      }
      this.toggled = false;
    } else {
      if(!navEl!.classList.contains('tiny')) {
        navEl!.classList.add('navbar-scrolled');
      }
      this.toggled = true;
    } 
    
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    console.log("Color change")
  }

}