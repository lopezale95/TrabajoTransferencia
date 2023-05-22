/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Busca_FelicidadComponent } from './busca_Felicidad.component';

describe('Busca_FelicidadComponent', () => {
  let component: Busca_FelicidadComponent;
  let fixture: ComponentFixture<Busca_FelicidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Busca_FelicidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Busca_FelicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
