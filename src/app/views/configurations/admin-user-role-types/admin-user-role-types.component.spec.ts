import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserRoleTypesComponent } from './admin-user-role-types.component';

describe('AdminUserRoleTypesComponent', () => {
  let component: AdminUserRoleTypesComponent;
  let fixture: ComponentFixture<AdminUserRoleTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserRoleTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserRoleTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
