import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `appcomp
  <a routerLink="test">Click me to navigate to Lazy load module</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
