import { NgModule } from '@angular/core';
import {
  Routes, RouterModule 
} from '@angular/router'
import { StartPageComponent } from '../pages/start-page/start-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { AuthformpageComponent } from '../pages/panel/authformpage/authformpage.component';

const routes: Routes = [
  { path: '', component: StartPageComponent, data: { animation: 'StartPage' } },
  { path: 'about', component: AboutPageComponent, data: { animation: 'AboutPage' } },
  { path: 'panel', component: AuthformpageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
