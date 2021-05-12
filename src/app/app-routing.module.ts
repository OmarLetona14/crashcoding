import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardexampleComponent } from './components/cardexample/cardexample.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';   

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'cards',
    canActivate: [AuthGuard],
    component: CardexampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
