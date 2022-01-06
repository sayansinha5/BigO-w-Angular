import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgomodaldetailsComponent } from './algomodaldetails.component';

describe('AlgomodaldetailsComponent', () => {
  let component: AlgomodaldetailsComponent;
  let fixture: ComponentFixture<AlgomodaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgomodaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgomodaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
