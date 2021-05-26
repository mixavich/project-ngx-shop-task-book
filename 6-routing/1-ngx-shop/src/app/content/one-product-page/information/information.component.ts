import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../../../../../../shared/mocks/6-routing/products';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  @Input()
  public product?: IProduct = null;
  public isShow = false;
  constructor(private readonly cartService: CartService) {}

  public addToCart(): void {
    this.cartService.updateCart(this.product, 'increment');
  }
  public show(): void {
    this.isShow = !this.isShow;
  }
}
