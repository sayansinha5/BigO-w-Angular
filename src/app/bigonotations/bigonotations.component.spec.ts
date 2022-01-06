import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigonotationsComponent } from './bigonotations.component';

describe('BigonotationsComponent', () => {
  let component: BigonotationsComponent;
  let fixture: ComponentFixture<BigonotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigonotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigonotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
