import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGalleryComponent } from './widget-gallery.component';

describe('WidgetGalleryComponent', () => {
  let component: WidgetGalleryComponent;
  let fixture: ComponentFixture<WidgetGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
