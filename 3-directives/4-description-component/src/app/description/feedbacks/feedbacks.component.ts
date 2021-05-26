import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbacksComponent {}
