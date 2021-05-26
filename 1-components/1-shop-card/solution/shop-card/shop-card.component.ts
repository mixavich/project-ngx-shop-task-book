import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ICartProduct } from '../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class ShopCardComponent {
  @Input()
  // @ts-ignore
  public product: ICartProduct = {} as ICartProduct;

  @Output()
  // @ts-ignore
  public increment = new EventEmitter();
  @Output()
  // @ts-ignore
  public decrement = new EventEmitter();

  public incrementProductInCart(): void {
    this.increment.emit();
  }

  public decrementProductInCart(): void {
    this.decrement.emit();
  }
}
