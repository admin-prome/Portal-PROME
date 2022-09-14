import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
// import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // SocialLoginModule,
    // DragDropModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// provide: 'SocialAuthServiceConfig',
//     useValue: {
//       autoLogin: true, //keeps the user signed in
//       providers: [
//         {
//           id: GoogleLoginProvider.PROVIDER_ID,
//           provider: new GoogleLoginProvider('204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com') // your client id
//         }
//       ]
//     }
//   }, 