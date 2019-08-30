import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedCrytocurrencyPage } from './supported-crytocurrency.page';

describe('SupportedCrytocurrencyPage', () => {
  let component: SupportedCrytocurrencyPage;
  let fixture: ComponentFixture<SupportedCrytocurrencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportedCrytocurrencyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportedCrytocurrencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
