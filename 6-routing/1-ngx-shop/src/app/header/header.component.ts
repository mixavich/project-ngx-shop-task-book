import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public count$ = this.cartService.getCountOfProducts();

  constructor(private router: Router, private cartService: CartService) {}

  public redirectTo() {
    this.router.navigate(['/cart']);
  }
}
