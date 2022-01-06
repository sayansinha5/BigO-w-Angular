import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmdetailsComponent } from './algorithmdetails.component';

describe('AlgorithmdetailsComponent', () => {
  let component: AlgorithmdetailsComponent;
  let fixture: ComponentFixture<AlgorithmdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
