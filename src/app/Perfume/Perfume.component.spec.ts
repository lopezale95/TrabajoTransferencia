/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerfumeComponent } from './Perfume.component';

describe('PerfumeComponent', () => {
  let component: PerfumeComponent;
  let fixture: ComponentFixture<PerfumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
