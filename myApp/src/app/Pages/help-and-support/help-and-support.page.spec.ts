import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAndSupportPage } from './help-and-support.page';

describe('HelpAndSupportPage', () => {
  let component: HelpAndSupportPage;
  let fixture: ComponentFixture<HelpAndSupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpAndSupportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAndSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
