import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MissionComponent } from './mission/mission.component';
import { MembershipComponent } from './membership/membership.component';
import { EventsComponent } from './events/events.component';
import { CareersComponent } from './careers/careers.component';
import { AccountComponent } from './account/account.component';

const appRoutes: Routes = [
  {
	   path: '',
	   component: WelcomeComponent
	},
  {
	   path: 'login',
	   component: LoginComponent
	},
  {
	   path: 'signup',
	   component: SignupComponent
	},
  {
	   path: 'mission',
	   component: MissionComponent
	},
  {
	   path: 'membership',
	   component: MembershipComponent
	},
  {
	   path: 'events',
	   component: EventsComponent
	},
  {
	   path: 'careers',
	   component: CareersComponent
	},
  {
	   path: 'account',
	   component: AccountComponent
	}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
