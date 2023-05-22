/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WalleComponent } from './walle.component';

describe('WalleComponent', () => {
  let component: WalleComponent;
  let fixture: ComponentFixture<WalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
