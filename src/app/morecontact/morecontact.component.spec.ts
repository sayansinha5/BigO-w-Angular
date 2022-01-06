import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorecontactComponent } from './morecontact.component';

describe('MorecontactComponent', () => {
  let component: MorecontactComponent;
  let fixture: ComponentFixture<MorecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
