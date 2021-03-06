import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ReactappComponent } from './reactapp/reactapp.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserExpComponent } from './user-exp/user-exp.component';
import { BackendComponent } from './backend/backend.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';

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

  },
  {
    path: 'userExp',
    component: UserExpComponent

},
{
  path: 'backend',
  component: BackendComponent

},
{
  path: 'comingsoon',
  component: ComingsoonComponent
},
{
  path: 'opportunities',
  component: OpportunitiesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
