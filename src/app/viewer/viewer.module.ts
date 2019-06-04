import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer.component';
import { ChildrenViewerComponent } from './children-viewer/children-viewer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ViewerComponent, ChildrenViewerComponent],
  exports: [
    ViewerComponent
  ]
})
export class ViewerModule { }
