import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
	   path: '',
	   component: WelcomeComponent
	},
  {
	   path: 'login',
	   component: LoginComponent
	}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
