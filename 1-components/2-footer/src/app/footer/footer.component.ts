import {Component, ChangeDetectionStrategy, Output, Input} from '@angular/core';

@Component({
  selector: 'ngx-shop-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  public author = 'Angular Course';

  public currentYear: number = new Date().getFullYear();
}
