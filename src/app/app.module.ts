import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { MainServicesComponent } from './main-services/main-services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ReactappComponent } from './reactapp/reactapp.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserExpComponent } from './user-exp/user-exp.component';
import { BackendComponent } from './backend/backend.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MainServicesComponent,
    AboutComponent,
    ContactComponent,
    TeamComponent,
    MarketingComponent,
    ReactappComponent,
    PortfolioComponent,
    UserExpComponent,
    BackendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
