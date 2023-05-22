/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterestelarComponent } from './Interestelar.component';

describe('InterestelarComponent', () => {
  let component: InterestelarComponent;
  let fixture: ComponentFixture<InterestelarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestelarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
