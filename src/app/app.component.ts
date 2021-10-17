import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public id = 5;

  public add(): void {
    this.id += 1;
  }

  public substract(): void {
    this.id -= 1;
  }
}
