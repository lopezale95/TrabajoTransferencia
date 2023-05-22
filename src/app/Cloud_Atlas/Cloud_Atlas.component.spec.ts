/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cloud_AtlasComponent } from './Cloud_Atlas.component';

describe('Cloud_AtlasComponent', () => {
  let component: Cloud_AtlasComponent;
  let fixture: ComponentFixture<Cloud_AtlasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cloud_AtlasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cloud_AtlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
