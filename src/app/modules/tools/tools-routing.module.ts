import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegajoDigitalComponent } from './pages/dashboards/dashboards/legajo-digital/legajo-digital.component';
import { DashboardsComponent } from './pages/dashboards/dashboards/dashboards.component';

const routes: Routes = [
  { path: '', component: DashboardsComponent },
  {
    path: 'tableros',
    component: DashboardsComponent,
    children: [
      { path: 'legajo-digital', component: LegajoDigitalComponent },
     
      { path: '**', redirectTo: '' } // Redirige cualquier otra ruta a 'legajo-digital'
    ]
  },
  { path: '**', redirectTo: 'tableros' } // Redirige la ruta principal a 'tableros'
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
