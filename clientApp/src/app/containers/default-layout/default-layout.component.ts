import { Component, OnDestroy, Inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { ActivatedRoute , Router } from '@angular/router';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { AuthenticationService } from '../../services/authentication.service';



@Component({
  selector: 'app-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnDestroy {
  //public navItems : any [];
  //public filteredItems = navItems;
  //public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  private ngZone: NgZone;
  private router: Router;
  public filterdData : any [];
  public lstNavs = [];
  

  constructor(private authService: AuthenticationService, @Inject(DOCUMENT) _document?: any) {


    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
    console.log(navItems);
    let RoleName = localStorage.getItem('RoleName');
    console.log(RoleName);

    var navToRemove:any = [];
    this.lstNavs = navItems;    
  }

  constructNavs(items){
    var lstNavItems = items.split(',');
    for(var i=0; i<lstNavItems.length; i++){
      for(var j = 0; j<navItems.length; j++){
        if (navItems[j].name == lstNavItems[i]) {
        this.lstNavs.push(navItems[j]);
        }
      }
    }
  }
  

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logout(){
    localStorage.clear();
    //this.ngZone.run(() => this.router.navigateByUrl('/login'))
    
    this.authService.logout();
  }
}
