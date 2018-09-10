import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBulbFormComponent } from '../light-bulb-form/light-bulb-form.component';
import { RouterModule } from '@angular/router';
import { LightBulbResolver } from '../services/light-bulb.resolver';
import { LightBulbService } from '../services/light-bulb.service';

const routes = [
  {
    path: '',
    component: LightBulbFormComponent
  },
  {
    path: ':lightbulbs/people/:people',
    component: LightBulbFormComponent,
    resolve: {
      lightBulbResult: LightBulbResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class LightBulbRoutingModule { }

export const routedComponents = [
  LightBulbFormComponent
];

export const routedProviders = [
  LightBulbResolver
];
