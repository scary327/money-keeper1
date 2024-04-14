import { Routes } from '@angular/router';
import {WelcomePageComponent} from "./pages/welcome-page/welcome-page.component";
import {LoginComponent} from "./components/authorization/login/login.component";
import {RegisterComponent} from "./components/authorization/register/register.component";

export const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
