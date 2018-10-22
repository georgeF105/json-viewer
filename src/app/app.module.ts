import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { ViewerModule } from './viewer/viewer.module';
import { ModuleViewModule } from './module-view/module-view.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    FileUploaderModule,
    ViewerModule,
    ModuleViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
