import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsmodaldetailsComponent } from './dsmodaldetails.component';

describe('DsmodaldetailsComponent', () => {
  let component: DsmodaldetailsComponent;
  let fixture: ComponentFixture<DsmodaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsmodaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsmodaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
