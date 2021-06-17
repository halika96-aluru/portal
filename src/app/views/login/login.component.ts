import { trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, OnChanges {
  private readonly _destroying$ = new Subject<void>();
  isIframe = false;
  loginDisplay = false;
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private httpClient: HttpClient, private router: Router,
    private msalBroadcastService: MsalBroadcastService
  ) {}


  ngAfterViewInit(): void {
   console.log('view intit');
  }

  ngOnChanges(changes: SimpleChanges){

    let activeAccount = this.authService.instance.getActiveAccount();
    
    console.log(activeAccount);
    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      activeAccount = (accounts[0]);
    }

    if(activeAccount){
      this.router.navigateByUrl('/dashboard');
    }        
  }




  ngOnInit(): void {
    // this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal

    // this.msalBroadcastService.inProgress$
    //   .pipe(
    //     filter((status: InteractionStatus) => status === InteractionStatus.None),
    //     takeUntil(this._destroying$)
    //   )
    //   .subscribe((result) => {
    //     console.log(result);
    //     this.setLoginDisplay();
    //     this.checkAndSetActiveAccount();
    //   })
  }
  
  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  checkAndSetActiveAccount(){
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();
    debugger;
    console.log(activeAccount);
    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }
  login() {
    this.router.navigateByUrl('/dashboard');
    // this.router.navigate(['dashboard']);
    // debugger;
    // if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
    //   if (this.msalGuardConfig.authRequest){
    //     this.authService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
    //       .subscribe((response: AuthenticationResult) => {
    //         this.authService.instance.setActiveAccount(response.account);
    //       });
    //     } else {
    //       this.authService.loginPopup()
    //         .subscribe((response: AuthenticationResult) => {
    //           this.authService.instance.setActiveAccount(response.account);
    //         });
    //   }
    // } else {
    //   if (this.msalGuardConfig.authRequest){
    //     let req = {...this.msalGuardConfig.authRequest} as RedirectRequest
      
    //     if(!req.redirectUri || req.redirectUri == '/'){
    //      // req.redirectUri = window.location.origin + '/#/dashboard';
    //     }
    //     alert('authrequest' + JSON.stringify(req));
    //     this.authService.loginRedirect(req);
    //   } else {
    //     this.authService.loginRedirect();
    //   }
    // }
  }


  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

}
