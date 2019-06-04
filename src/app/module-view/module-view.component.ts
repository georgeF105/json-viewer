import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { ViewerService } from '../viewer/viewer.service';
import { map, withLatestFrom, tap } from 'rxjs/operators';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent implements OnInit {
  public currentModules$: Observable<Record<string, Object>>;
  public currentModule$: Observable<any>;

  constructor(
    private viewerService: ViewerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentModules$ = this.viewerService.currentFile$.pipe(
      map(stats => this.toModuleRecord(stats))
    );

    const moduleId$ = this.activatedRoute.queryParams.pipe(
      map(queryParams => queryParams.moduleId)
    );

    this.currentModule$ = combineLatest(
      this.currentModules$,
      moduleId$
      ).pipe(
        map(([moduleRecord, moduleId]) => moduleId && moduleRecord[moduleId]),
        tap(it => console.log('current module', it))
      );
  }

  private toModuleRecord (stats: any): Record<string, Object> {
    return (stats.modules || []).reduce((acc, current) => {
      (current.reasons || []).forEach(reason => {
        if (!acc[reason.moduleId]) {
          acc[reason.moduleId] = {};
        }

        if (!acc[reason.moduleId].children) {
          acc[reason.moduleId].children = {};
        }

        acc[reason.moduleId].children[current.id] = acc[reason.moduleId].children[current.id] || 0 + 1;
      });

      acc[current.id] = current;
      return acc;
    }, {});
  }

}
