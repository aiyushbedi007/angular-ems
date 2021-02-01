import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { EnquirysComponent } from './enquirys/enquirys.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: "jumbotron", component: JumbotronComponent},
  { path: "bootstrap-form", component: BootstrapFormComponent},
  { path: "bootstrap-table", component: BootstrapTableComponent},
  { path: 'enquirys', component: EnquirysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
