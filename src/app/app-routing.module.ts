import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { EetMainComponent } from './eet-main/eet-main.component';
import { CaDocReportsComponent } from './ca-doc-reports/ca-doc-reports.component';
import { SearchStatusComponent } from './search-status/search-status.component';
import { EetErrorsComponent } from './eet-errors/eet-errors.component';
import { JobScheduleComponent } from './job-schedule/job-schedule.component';
import { GroupMappingComponent } from './group-mapping/group-mapping.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: HomeComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'main',       component: EetMainComponent },
  { path: 'cadocs',     component: CaDocReportsComponent },
  { path: 'search',     component:  SearchStatusComponent },
  { path: 'eeterrors',  component:  EetErrorsComponent },
  { path: 'schedule',   component:  JobScheduleComponent },
  { path: 'mapping',    component:  GroupMappingComponent },
  { path: '**',         component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
