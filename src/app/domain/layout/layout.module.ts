import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const exportComponents = [
  LayoutComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...exportComponents,
    NavBarComponent
  ],
  exports: [
    ...exportComponents
  ]
})
export class LayoutModule { }
