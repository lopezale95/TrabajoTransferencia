/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Siete_AlmasComponent } from './siete_Almas.component';

describe('Siete_AlmasComponent', () => {
  let component: Siete_AlmasComponent;
  let fixture: ComponentFixture<Siete_AlmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Siete_AlmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Siete_AlmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
