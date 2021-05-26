import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-shop-product-filter',
  templateUrl: './product-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFilterComponent {}
