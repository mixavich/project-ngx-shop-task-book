import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class ProductCardComponent {
  @Input()
  // @ts-ignore
  public product!: IProduct = null;

  @Output()
  // @ts-ignore
  public goToProduct: EventEmitter<void> = new EventEmitter<void>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }
}
