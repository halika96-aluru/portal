import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-role-settings',
  templateUrl: './user-role-settings.component.html',
  styleUrls: ['./user-role-settings.component.scss']
})
export class UserRoleSettingsComponent implements OnInit {

  activeTabIndex = 0;
  constructor(private router: Router) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.activeTabIndex = <number>this.router.getCurrentNavigation().extras.state.activeTabIndex;
    }
   }

  ngOnInit(): void {
  }

}
