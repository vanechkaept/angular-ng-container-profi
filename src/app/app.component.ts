import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public id = 5;

  public addId(): void {
    this.id += 1;
  }

  public substractId(): void {
    this.id -= 1;
  }
}
