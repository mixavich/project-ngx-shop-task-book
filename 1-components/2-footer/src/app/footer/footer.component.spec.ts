import { FooterComponent } from './footer.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('[Moдуль 1 - Футтер компонент]', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Компонент "footer" должне иметь свойство author cо значенимем Angular Course', () => {
    expect((component as any)?.author).toEqual('Angular Course');
  });
  it('Компонент "footer" должне иметь свойство currentYear cо значенимем текущего года', () => {
    expect((component as any)?.currentYear).toEqual(new Date().getFullYear());
  });
  it('тег с селектором [.footer-title] должне интерполировать свойства author и currentYear', () => {
    const { currentYear, author } = component as any;
    const titleEl = fixture.debugElement.query(By.css('.footer-title'));
    const titleValue = titleEl.nativeElement.textContent.trim();
    expect(titleValue).toEqual(`© ${currentYear}, ${author}`);
  });
});
