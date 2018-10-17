import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-children-viewer',
  templateUrl: './children-viewer.component.html',
  styleUrls: ['./children-viewer.component.scss']
})
export class ChildrenViewerComponent {
  @Input() public child: Object | string | number;

  public isObjectType (item: Object | string | number): boolean {
    return typeof item === 'object';
  }

}
