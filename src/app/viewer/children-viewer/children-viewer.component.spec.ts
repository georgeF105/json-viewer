import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenViewerComponent } from './children-viewer.component';

describe('ChildrenViewerComponent', () => {
  let component: ChildrenViewerComponent;
  let fixture: ComponentFixture<ChildrenViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
