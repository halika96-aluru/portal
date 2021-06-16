import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { MsalService } from "@azure/msal-angular";
import { Observable } from "rxjs";


@Injectable()
export class CanActivateMainRoute implements CanActivate {
  constructor(private router: Router, private msalAuthService: MsalService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

      
    let activeAccount = this.msalAuthService.instance.getActiveAccount();
    
    console.log(activeAccount);
    if (!activeAccount && this.msalAuthService.instance.getAllAccounts().length > 0) {
      let accounts = this.msalAuthService.instance.getAllAccounts();
      activeAccount = (accounts[0]);
    }

    if(!activeAccount){
      this.router.navigateByUrl('/login');
    } 

    return !!activeAccount;
  }
}