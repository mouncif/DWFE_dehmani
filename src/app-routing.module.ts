import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app/app.component';
import { LoginComponent } from './app/composants/login/login.component';
import { SidebarComponent } from './app/composants/sidebar/sidebar.component';
import { AdduserComponent } from './app/composants/adduser/adduser.component';


const routes: Routes = [
  {
    path: 'add', component: AppComponent,

  },
  {
    path: 'dash', component: AdduserComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
