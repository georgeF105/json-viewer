import { Component, OnInit } from '@angular/core';
import { WebworkerService } from '../webworker/webworker.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  public json: any;

  constructor(
    private _webworkerService: WebworkerService
  ) { }

  ngOnInit() {
  }

  public fileChange (event): void {
    console.log('event', event);
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


      this._webworkerService.parseString(result)
        .then(response => {
          console.log('got response in component', response);
          this.json = response;
        });
    };
  }

}
