import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [

  {path:"" , redirectTo:'home' , pathMatch:"full", title:"HOME"},
  {path:"home" , component:HomeComponent , title:"HOME"},
  {path:"about" , component:AboutComponent , title:"ABOUT"},
  {path:"portfolio" , component:PortfolioComponent , title:"PORTFOLIO"},
  {path:"contact" , component:ContactComponent , title:"CONTACT"},
  {path:"**" , component:NotFoundPageComponent , title:"ERROR 404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
