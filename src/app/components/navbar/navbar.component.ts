import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  toggled: boolean = false;
  themeSwitch: HTMLElement | undefined;

  
  ngOnInit() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    document.body.classList.toggle('dark-theme', prefersDarkScheme.matches);
    this.themeSwitch = document.getElementById('theme-switch')!;
    prefersDarkScheme.matches ? this.themeSwitch!.classList.add('dark') : this.themeSwitch!.classList.remove('dark')
  }
  
  ngAfterViewInit() {
    const navEl = document.getElementById('navbar')
    var underlined: boolean = false

    document.querySelectorAll(".nav-link").forEach(link => {
      if(window.location.href.includes(link.attributes.getNamedItem("href")?.value!)) {
        link.classList.add("fixed-underline");
        underlined = true
      }
    })

    if(!underlined) {
      document.querySelectorAll(".nav-link")[0].classList.add("fixed-underline")
    }


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
    this.themeSwitch!.classList.toggle('dark');
  }

}