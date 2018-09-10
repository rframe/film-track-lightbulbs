import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBulbFormComponent } from './light-bulb-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as testMocks from '../../../models/helpers/test-mocks';

describe('LightBulbFormComponent', () => {
  let component: LightBulbFormComponent;
  let fixture: ComponentFixture<LightBulbFormComponent>;

  let mocks: {
    route: ActivatedRoute,
    init: () => void
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBulbFormComponent ],
      providers: [
        FormBuilder,
        {provide: ActivatedRoute, useClass: testMocks.ActivatedRouteMock},
        {provide: Router, useClass: testMocks.RouterMock}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBulbFormComponent);
    component = fixture.componentInstance;
  });


  beforeEach(() => {
    const route = fixture.debugElement.injector.get(ActivatedRoute);
    mocks = {
      route,
      init: component.ngOnInit
    };
    spyOn(component, 'ngOnInit')
      .and
      .callFake(() => {});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
