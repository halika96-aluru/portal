import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DisplayReportComponent } from './display-report.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('DisplayReportComponent', () => {
  let component: DisplayReportComponent;
  let fixture: ComponentFixture<DisplayReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayReportComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
