import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from './views/login/login.component';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from '../auth.guard';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
 
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
 // },
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
        path: 'requests',
        loadChildren: () => import('./views/requests/requests.module').then(m => m.RequestsModule)
      },
      {
        path: 'feedback', canActivate : [MsalGuard],
        loadChildren: () => import('./views/feedback/feedback.module').then(m => m.FeedbackModule)
      },
      {
        path: 'admins',
        loadChildren: () => import('./views/admins/admins.module').then(m => m.AdminsModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./views/reports/reports.module').then(m => m.ReportsModule)
      },      
      {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
      },
      
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
