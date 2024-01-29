import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { LegajoDigitalComponent } from './pages/dashboards/dashboards/legajo-digital/legajo-digital.component';
import { DashboardsComponent } from './pages/dashboards/dashboards/dashboards.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar/navbar.component';


@NgModule({
    declarations: [
        LegajoDigitalComponent,
        DashboardsComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        ToolsRoutingModule,
        
    ]
})
export class ToolsModule { }
