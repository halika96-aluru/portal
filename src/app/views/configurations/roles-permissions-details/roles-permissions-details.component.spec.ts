import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPermissionsDetailsComponent } from './roles-permissions-details.component';

describe('RolesPermissionsDetailsComponent', () => {
  let component: RolesPermissionsDetailsComponent;
  let fixture: ComponentFixture<RolesPermissionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesPermissionsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPermissionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
