import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MissionComponent } from './mission/mission.component';
import { AccountComponent } from './account/account.component';
import { MembershipComponent } from './membership/membership.component';
import { EventsComponent } from './events/events.component';
import { CareersComponent } from './careers/careers.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    MissionComponent,
    AccountComponent,
    MembershipComponent,
    EventsComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
