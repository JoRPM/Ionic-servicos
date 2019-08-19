import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaclientePage } from './listacliente.page';

describe('ListaclientePage', () => {
  let component: ListaclientePage;
  let fixture: ComponentFixture<ListaclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaclientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
