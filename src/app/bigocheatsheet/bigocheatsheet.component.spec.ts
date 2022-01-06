import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigocheatsheetComponent } from './bigocheatsheet.component';

describe('BigocheatsheetComponent', () => {
  let component: BigocheatsheetComponent;
  let fixture: ComponentFixture<BigocheatsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigocheatsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigocheatsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
