import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-shop-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsComponent {}
