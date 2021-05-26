import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-one-product-page',
  templateUrl: './one-product-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() public product = null;
  goToBasket() {}
}
