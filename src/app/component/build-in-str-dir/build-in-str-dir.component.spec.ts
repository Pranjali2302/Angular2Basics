import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInStrDirComponent } from './build-in-str-dir.component';

describe('BuildInStrDirComponent', () => {
  let component: BuildInStrDirComponent;
  let fixture: ComponentFixture<BuildInStrDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildInStrDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInStrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
