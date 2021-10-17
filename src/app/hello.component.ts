import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent {
  @Input() id: number;
  @Output() changeId = new EventEmitter<number>();

  public add(): void {
    this.id += 1;
    this.changeId.emit(this.id);
  }

  public substract(): void {
    this.id -= 1;
    this.changeId.emit(this.id);
  }
}
