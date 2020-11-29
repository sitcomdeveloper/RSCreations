import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './index/home/home.component';
import { ContactComponent } from './index/contact/contact.component';
import { AboutComponent } from './index/about/about.component';
import { BlogComponent } from './index/blog/blog.component';
import { TechnicalservicesComponent } from './index/technicalservices/technicalservices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent,
    TechnicalservicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
