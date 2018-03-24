import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInAtrDirComponent } from './build-in-atr-dir.component';

describe('BuildInAtrDirComponent', () => {
  let component: BuildInAtrDirComponent;
  let fixture: ComponentFixture<BuildInAtrDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildInAtrDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInAtrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
