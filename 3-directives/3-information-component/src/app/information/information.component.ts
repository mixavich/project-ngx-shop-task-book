import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {}
