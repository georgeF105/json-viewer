import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer.component';
import { ChildrenViewerComponent } from './children-viewer/children-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewerComponent, ChildrenViewerComponent],
  exports: [
    ViewerComponent
  ]
})
export class ViewerModule { }
