import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CchGristerComponent } from './cch-grister.component';

describe('CchGristerComponent', () => {
  let component: CchGristerComponent;
  let fixture: ComponentFixture<CchGristerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CchGristerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CchGristerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
