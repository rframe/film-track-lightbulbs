import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import { ActivatedRoute, NavigationExtras, ParamMap, Route, Router } from '@angular/router';
import { Data } from '@angular/router/src/config';
import { LightBulbResult } from '../../../models/classes/light-bulb-result';

@Component({
  selector: 'app-light-bulb-form',
  templateUrl: './light-bulb-form.component.html',
  styleUrls: ['./light-bulb-form.component.scss']
})
export class LightBulbFormComponent implements OnInit {

  formGroup$: Observable<FormGroup>;
  lightbulbResult$: Observable<LightBulbResult>;

  /**
   * Class Constructor Function
   * @param {FormBuilder} _formBuilder
   */
  constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute, public _router: Router) { }

  /**
   * Angular Lifecycle hook oninit
   */
  ngOnInit() {
    this.buildForm();
  }

  /**
   * Build form function, will use form builder to create the FormGroup for the page
   */
  buildForm() {
    this.lightbulbResult$ = this._route.data.pipe(
      map((data: Data) => {
        console.log(data);
        return data.lightBulbResult as LightBulbResult;
      })
    );

    this.formGroup$ = this.lightbulbResult$.pipe(
      map((lightbulbResult: LightBulbResult) => {
        const result = lightbulbResult || {} as LightBulbResult;
        return this._formBuilder
          .group(
            {
              lightbulbs: [result.lightbulbs, [Validators.required, Validators.pattern(/^\d+$/)]],
              people: [result.people, [Validators.required, Validators.pattern(/^\d+$/)]]
            }
          );
      })
    );
  }

  submit(event: Event, formGroup: FormGroup) {
    if (formGroup.valid) {
      const values = formGroup.value;
      this._router.navigate([
        '/',
        'lightbulbs',
        values.lightbulbs,
        'people',
        values.people]);
    }
  }

}
