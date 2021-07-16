import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-settings',
  templateUrl: './department-settings.component.html',
  styleUrls: ['./department-settings.component.scss']
})
export class DepartmentSettingsComponent implements OnInit {
  activeTabIndex = 0;
  constructor(private router: Router) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.activeTabIndex = <number>this.router.getCurrentNavigation().extras.state.activeTabIndex;
    }
   }

  ngOnInit(): void {
  }

}
