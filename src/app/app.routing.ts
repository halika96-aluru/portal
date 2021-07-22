import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from './views/login/login.component';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from '../auth.guard';
import { MsalGuard } from '@azure/msal-angular';
import { LoginComponent } from './views/login/login.component';


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
        path: 'reports',
        loadChildren: () => import('./views/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./views/settings/settings.module').then(m => m.SettingsModule)
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

