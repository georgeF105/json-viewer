import { Component, OnInit } from '@angular/core';
import { WebworkerService } from '../webworker/webworker.service';
import { ViewerService } from '../viewer/viewer.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  constructor(
    private _viewerService: ViewerService
  ) { }

  ngOnInit() {
  }

  public fileChange (event): void {
    const { files } = event.target;

    if (files.length) {
      const reader = new FileReader();
      reader.onload = this.onFileUploaded(files[0]);

      reader.readAsText(files[0]);
    }
  }

  private onFileUploaded (file: File): any {
    return event => {
      const { result } = event.target;
      this._viewerService.onNewFileUploaded(result);
    };
  }

}
