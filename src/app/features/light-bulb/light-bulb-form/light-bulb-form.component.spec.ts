import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBulbFormComponent } from './light-bulb-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import * as testMocks from '../../../models/helpers/test-mocks';
import { of as observableOf } from 'rxjs';
import { LightBulbResult } from '../../../models/classes/light-bulb-result';
import { By } from '@angular/platform-browser';
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
    const lightBulbResult = new LightBulbResult(100, 100, [1, 4, 9, 16, 25, 36, 49, 56, 81, 100]);
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

    it('should update the values of the form to that of the form group', () => {
      const lighbulbsInput = fixture.debugElement.query(By.css('#txtBoxLightBulbs'));
      const peopleInput = fixture.debugElement.query(By.css('#txtBoxPeople'));

      expect(+lighbulbsInput.nativeElement.value).toEqual(lightBulbResult.lightbulbs);
      expect(+peopleInput.nativeElement.value).toEqual(lightBulbResult.people);
    });

    it('should put the badges on the page', () => {
      const header6 = fixture.debugElement.query(By.css('h6'));
      expect(header6.nativeElement.innerText.trim())
        .toEqual(`For ${lightBulbResult.lightbulbs} light bulbs and ${lightBulbResult.people}` +
          ` people there are ${lightBulbResult.lightsOn.length} light bulbs on after everyone enters the room`)
      const badges = fixture.debugElement.queryAll(By.css('.light-indicator'));
      expect(badges.map(x => +x.nativeElement.innerText.trim())).toEqual(lightBulbResult.lightsOn);
    });
  });

  describe('Empty Form Group', () => {
    const lightBulbResult = null;
    let formGroup = null;
    beforeEach(() => {
      mocks.route.data = observableOf({
        lightBulbResult
      } as Data);

      spyOn(component, 'submit')
        .and
        .callFake((event, fGroup) => { formGroup = fGroup; });

      fixture.detectChanges();
    });

    it('should mark the input invalid if a non digit is input', () => {
      const lighbulbsInput = fixture.debugElement.query(By.css('#txtBoxLightBulbs'));
      lighbulbsInput.nativeElement.value = 'Test';
      lighbulbsInput.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const peopleInput = fixture.debugElement.query(By.css('#txtBoxPeople'));
      peopleInput.nativeElement.value = 'Test';
      peopleInput.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const form = fixture.debugElement.query(By.css('form'));
      form.triggerEventHandler('submit', null);
      fixture.detectChanges();

      expect(component.submit).toHaveBeenCalledTimes(1);
      expect(formGroup.controls.lightbulbs.valid).toBeFalsy();
      expect(formGroup.controls.people.valid).toBeFalsy();
    });

    it('should mark the input invalid if a negative digit is input', () => {
      const lighbulbsInput = fixture.debugElement.query(By.css('#txtBoxLightBulbs'));
      lighbulbsInput.nativeElement.value = -32;
      lighbulbsInput.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const peopleInput = fixture.debugElement.query(By.css('#txtBoxPeople'));
      peopleInput.nativeElement.value = -32;
      peopleInput.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const form = fixture.debugElement.query(By.css('form'));
      form.triggerEventHandler('submit', null);
      fixture.detectChanges();

      expect(component.submit).toHaveBeenCalledTimes(1);
      expect(formGroup.controls.lightbulbs.valid).toBeFalsy();
      expect(formGroup.controls.people.valid).toBeFalsy();
    });

    it('should mark the input valid if a positive digit is input', () => {
      const lighbulbsInput = fixture.debugElement.query(By.css('#txtBoxLightBulbs'));
      lighbulbsInput.nativeElement.value = 32;
      lighbulbsInput.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const peopleInput = fixture.debugElement.query(By.css('#txtBoxPeople'));
      peopleInput.nativeElement.value = 32;
      peopleInput.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const form = fixture.debugElement.query(By.css('form'));
      form.triggerEventHandler('submit', null);
      fixture.detectChanges();

      expect(component.submit).toHaveBeenCalledTimes(1);
      expect(formGroup.controls.lightbulbs.valid).toBeTruthy();
      expect(formGroup.controls.people.valid).toBeTruthy();
    });

  });

});
