import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PracticeAreaComponent } from './practice-area/practice-area.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FreeConsultComponent } from './free-consult/free-consult.component';
import { HomeComponent } from './home/home.component';
import { OurPracticeAreaComponent } from './home/our-practice-area/our-practice-area.component';
import { HowitWorksComponent } from './home/howit-works/howit-works.component';
import { CaseLikeYoursComponent } from './home/case-like-yours/case-like-yours.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { OurExpertTeamComponent } from './home/our-expert-team/our-expert-team.component';
import { PracticeDetailsComponent } from './home/practice-details/practice-details.component';
import { ContractComponent } from './home/contract/contract.component';
import { OurClientComponent } from './home/our-client/our-client.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './home/landing/landing.component';
import { LawerComponent } from './lawer/lawer.component';
import { AllLawerComponent } from './all-lawer/all-lawer.component';
import { CommonModule } from '@angular/common';
// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PracticeAreaComponent,
    FaqComponent,
    BlogComponent,
    ContactComponent,
    FreeConsultComponent,
    HomeComponent,
    OurPracticeAreaComponent,
    HowitWorksComponent,
    CaseLikeYoursComponent,
    OurExpertTeamComponent,
    PracticeDetailsComponent,
    ContractComponent,
    OurClientComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    LawerComponent,
    AllLawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    GoogleMapsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
