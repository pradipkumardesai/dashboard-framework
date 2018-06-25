import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGalleryCardComponent } from './widget-gallery-card.component';

describe('WidgetGalleryCardComponent', () => {
  let component: WidgetGalleryCardComponent;
  let fixture: ComponentFixture<WidgetGalleryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGalleryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGalleryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
