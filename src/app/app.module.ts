import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { DocumentsComponent } from './components/documents/documents.component';


// import { LoginComponent } from './login/login.component';
// import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    HomeComponent,
    ReportsComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }