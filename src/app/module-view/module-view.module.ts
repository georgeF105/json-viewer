import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleViewComponent } from './module-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ModuleViewComponent
  ],
  exports: [
    ModuleViewComponent
  ]
})
export class ModuleViewModule { }
