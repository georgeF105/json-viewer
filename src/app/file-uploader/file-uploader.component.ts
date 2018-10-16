import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  public json: any;

  constructor() { }

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

      const object = JSON.parse(result);

      console.log('file uploaded result', object);
      this.json = object;

    };
  }

}
