import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ReactappComponent } from './reactapp/reactapp.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'market',
    component: MarketingComponent
  },
  {
      path: 'react',
      component: ReactappComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
