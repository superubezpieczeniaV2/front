import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { StartHeaderComponentComponent } from './components/start-header-component/start-header-component.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FooterComponent } from './components/footer/footer.component';
import { PromosComponent } from './components/promos/promos.component';
import { PromosItemComponent } from './components/promos-item/promos-item.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
import { ContactComponent } from './components/StartPage/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    StartHeaderComponentComponent,
    StartPageComponent,
    AboutPageComponent,
    CalculatorComponent,
    FooterComponent,
    PromosComponent,
    PromosItemComponent,
    TermsPageComponent,
    ContactComponent,
    AuthFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
