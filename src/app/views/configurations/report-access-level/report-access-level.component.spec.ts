import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAccessLevelComponent } from './report-access-level.component';

describe('ReportAccessLevelComponent', () => {
  let component: ReportAccessLevelComponent;
  let fixture: ComponentFixture<ReportAccessLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAccessLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAccessLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
