import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <div [class.bg-red-500]="true">Block with red bg</div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
