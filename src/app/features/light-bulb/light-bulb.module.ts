import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBulbRoutingModule, routedComponents, routedProviders } from './light-bulb-routing/light-bulb-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LightBulbService } from './services/light-bulb.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    LightBulbRoutingModule,
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    ...routedProviders,
    LightBulbService
  ]
})
export class LightBulbModule { }
