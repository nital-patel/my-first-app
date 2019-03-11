import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>{{ title }}</h1>
    <app-products></app-products>
  </div>
  <app-login></app-login>`
})
export class AppComponent {
  title = 'eCommerce site';
}
