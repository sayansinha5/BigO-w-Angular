import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastructuredetailsComponent } from './datastructuredetails.component';

describe('DatastructuredetailsComponent', () => {
  let component: DatastructuredetailsComponent;
  let fixture: ComponentFixture<DatastructuredetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastructuredetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastructuredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
