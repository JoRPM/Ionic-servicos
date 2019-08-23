import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarprofissionalPage } from './listarprofissional.page';

describe('ListarprofissionalPage', () => {
  let component: ListarprofissionalPage;
  let fixture: ComponentFixture<ListarprofissionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarprofissionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarprofissionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
