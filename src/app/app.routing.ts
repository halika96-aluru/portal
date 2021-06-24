import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from './views/login/login.component';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from '../auth.guard';
import { MsalGuard } from '@azure/msal-angular';
import { LoginComponent } from './views/login/login.component';
import { CanActivateMainRoute } from './services/CanActivateMainRoute'

export const routes: Routes = [

  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // }, 
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '', 
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'requests',canActivateChild: [MsalGuard],
        loadChildren: () => import('./views/requests/requests.module').then(m => m.RequestsModule)
      },
      {
        path: 'feedback',canActivateChild: [MsalGuard],
        loadChildren: () => import('./views/feedback/feedback.module').then(m => m.FeedbackModule)
      },
      {
        path: 'admins',canActivateChild: [MsalGuard],
        loadChildren: () => import('./views/admins/admins.module').then(m => m.AdminsModule)
      },
      {
        path: 'reports',canActivateChild: [MsalGuard],
        loadChildren: () => import('./views/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: '', redirectTo: '/dashboard', pathMatch: 'full',
      },
      {
        path: 'code',
        redirectTo: '/dashboard',  pathMatch: 'full',
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

