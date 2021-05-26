import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../../../../../../shared/mocks/6-routing/products';

@Component({
  selector: 'ngx-shop-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductComponent {
  @Input()
  public product: IProduct = null;
  @Input()
  public disabled?: boolean;
  @Output()
  public decrement: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Output()
  public increment: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(private router: Router) {}
  public decrementProductInCart(product: IProduct): void {
    this.decrement.emit(product);
  }

  public incrementProductInCart(product: IProduct): void {
    this.increment.emit(product);
  }
  public redirectTo(): void {
    this.router.navigate(['/category', this.product.subCategory]);
  }
}
