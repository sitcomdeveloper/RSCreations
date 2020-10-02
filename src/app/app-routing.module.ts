import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './index/contact/contact.component';
import { HomeComponent } from './index/home/home.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {path: '', component: IndexComponent,
  // {path: 'index', component: IndexComponent, 
   children: [
     {path: '', redirectTo: 'home', pathMatch: 'full'},
     {path: 'home', component: HomeComponent},
     {path: 'contact', component: ContactComponent}
   ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
