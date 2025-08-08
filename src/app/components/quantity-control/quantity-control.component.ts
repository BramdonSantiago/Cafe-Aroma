import { Component, Input, Output, EventEmitter, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quantity-control',
  imports: [CommonModule],
  templateUrl: './quantity-control.component.html',
  styleUrl: './quantity-control.component.scss'
})
export class QuantityControlComponent {
  @Input() dimension: 'big' | 'small' = 'big';

  @Input() minQuantity : number = 1;
  @Input() maxQuantity : number = 10;

  private _value = signal(this.minQuantity);
  @Output() valueChange = new EventEmitter<number>();

  value = this._value.asReadonly();

  constructor() {
    effect(() => {
      this.valueChange.emit(this._value());
    });
  }

  increase() {
    const newValue = this._value() + 1;
    if (newValue <= this.maxQuantity) this._value.set(newValue);
  }

  decrease() {
    const newValue = this._value() - 1;
    if (newValue >= this.minQuantity) this._value.set(newValue);
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).valueAsNumber;
    if (!isNaN(inputValue) && inputValue >= this.minQuantity && inputValue <= this.maxQuantity) {
      this._value.set(inputValue);
    }
  }

}
