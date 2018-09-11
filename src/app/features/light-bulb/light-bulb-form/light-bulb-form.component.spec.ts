import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBulbFormComponent } from './light-bulb-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import * as testMocks from '../../../models/helpers/test-mocks';
import { of as observableOf } from 'rxjs';
import { LightBulbResult } from '../../../models/classes/light-bulb-result';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LightBulbFormComponent', () => {
  let component: LightBulbFormComponent;
  let fixture: ComponentFixture<LightBulbFormComponent>;

  let mocks: {
    route: ActivatedRoute,
    init: () => void
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule],
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
  });

  describe('Form Group', () => {
    const lightBulbResult = new LightBulbResult(100, 100, [1, 4, 9, 16, 25, 36, 49, 56, 81]);
    beforeEach(() => {
      mocks.route.data = observableOf({
        lightBulbResult
      } as Data);

      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should create the proper form', async(() => {

      component.formGroup$
        .toPromise()
        .then((fg) => {
          expect(fg.controls.lightbulbs.value).toEqual(lightBulbResult.lightbulbs);
          expect(fg.controls.people.value).toEqual(lightBulbResult.people);
        });
    }));
  });
});
