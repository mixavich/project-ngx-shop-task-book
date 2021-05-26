import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/2-pipes/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class ProductCardComponent {
  @Input() product: IProduct = {} as IProduct;

  @Output() goToProduct = new EventEmitter();

  redirectTo(): void {
    this.goToProduct.emit();
  }
}
