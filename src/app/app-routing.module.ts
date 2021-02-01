import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { EnquirysComponent } from './enquirys/enquirys.component';
import { EnquiryCreateComponent } from './enquiry-create/enquiry-create.component';
import { EnquiryEditComponent } from './enquiry-edit/enquiry-edit.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: "jumbotron", component: JumbotronComponent},
  { path: "bootstrap-form", component: BootstrapFormComponent},
  { path: "bootstrap-table", component: BootstrapTableComponent},
  { path: 'enquirys', component: EnquirysComponent },
  { path: 'create-enquiry', component: EnquiryCreateComponent },
  { path: 'enquiry-list', component: EnquiryListComponent },
  { path: 'enquiry-edit/:id', component: EnquiryEditComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
