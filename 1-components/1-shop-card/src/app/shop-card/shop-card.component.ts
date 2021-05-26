import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {}
