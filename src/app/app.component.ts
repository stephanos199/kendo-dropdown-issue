import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `appcomp
  <a routerLink="test"></a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
