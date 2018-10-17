import { Component, OnInit } from '@angular/core';
import { ViewerService } from './viewer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  public currentFile$: Observable<Object>;

  constructor(
    private viewerService: ViewerService
  ) { }

  ngOnInit() {
    this.currentFile$ = this.viewerService.currentFile$;
  }

}
