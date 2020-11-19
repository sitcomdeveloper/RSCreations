import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './index/about/about.component';
import { BlogComponent } from './index/blog/blog.component';
import { ContactComponent } from './index/contact/contact.component';
import { HomeComponent } from './index/home/home.component';
import { IndexComponent } from './index/index.component';
import { TechnicalservicesComponent } from './index/technicalservices/technicalservices.component';


const routes: Routes = [
  {path: '', component: IndexComponent,
  // {path: 'index', component: IndexComponent, 
   children: [
     {path: '', redirectTo: 'home', pathMatch: 'full'},
     {path: 'home', component: HomeComponent},
     {path: 'contact', component: ContactComponent},
     {path: 'about', component: AboutComponent},
     {path: 'blog', component: BlogComponent},
     {path: 'services', component: TechnicalservicesComponent}
   ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
