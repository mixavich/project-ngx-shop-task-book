import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = 'Компонент формы заказа';
  public terminalMessage: FormData = null;

  public confirm(event: FormData) {
    this.terminalMessage = event;
  }
}
