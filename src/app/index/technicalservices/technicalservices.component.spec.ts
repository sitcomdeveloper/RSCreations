import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalservicesComponent } from './technicalservices.component';

describe('TechnicalservicesComponent', () => {
  let component: TechnicalservicesComponent;
  let fixture: ComponentFixture<TechnicalservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
