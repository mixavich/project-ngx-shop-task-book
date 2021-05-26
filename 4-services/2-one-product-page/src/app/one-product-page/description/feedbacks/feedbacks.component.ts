import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IFeedback } from '../../../../../../../shared/mocks/4-services/products';

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbacksComponent {
  @Input()
  public feedbacks: IFeedback[] = [];
  @Output()
  public addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();
  public addNewFeedback(): void {
    this.addFeedbackEvent.emit('отзыв добавлен');
  }
}
