/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { El_Castillo_AmbulanteComponent } from './El_Castillo_Ambulante.component';

describe('El_Castillo_AmbulanteComponent', () => {
  let component: El_Castillo_AmbulanteComponent;
  let fixture: ComponentFixture<El_Castillo_AmbulanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ El_Castillo_AmbulanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(El_Castillo_AmbulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
