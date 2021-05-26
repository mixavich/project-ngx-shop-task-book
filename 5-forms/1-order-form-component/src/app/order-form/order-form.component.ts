import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-shop-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent {}
