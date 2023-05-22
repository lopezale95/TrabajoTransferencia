/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExpresoComponent } from './Expreso.component';

describe('ExpresoComponent', () => {
  let component: ExpresoComponent;
  let fixture: ComponentFixture<ExpresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
