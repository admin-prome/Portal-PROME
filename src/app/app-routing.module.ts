import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  //{ path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'herramientas', loadChildren: () => import('./modules/tools/tools.module').then(m => m.ToolsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
