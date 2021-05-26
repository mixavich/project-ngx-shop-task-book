import { takeUntil, tap } from 'rxjs/operators';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../../../../../shared/mocks/6-routing/products';
@Component({
  selector: 'ngx-shop-cart',
  templateUrl: './cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit, OnDestroy {
  public disabled = false;
  public cart$: Observable<IProduct[]>;
  public unSubscriber = new Subject();

  constructor(
    private readonly cartService: CartService,
    private readonly router: Router
  ) {}

  public ngOnInit() {
    this.cart$ = this.cartService.getCart().pipe(
      tap((data) => {
        if (data.length > 0) {
          return;
        }
        this.router.navigate(['']);
      }),
      takeUntil(this.unSubscriber)
    );
  }
  public decrementProductInCart(product: IProduct): void {
    this.cartService.updateCart(product, 'decrement');
  }
  public incrementProductInCart(product: IProduct): void {
    this.cartService.updateCart(product, 'increment');
  }
  public trackById(_index: number, item: IProduct): string {
    return item._id;
  }
  public confirm(data: {
    address: string;
    email: string;
    name: string;
    telephone: string;
  }): void {
    this.disabled = true;
  }
  public comeBack(): void {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.unSubscriber.next();
    this.unSubscriber.complete();
  }
}
