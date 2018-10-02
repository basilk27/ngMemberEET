import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { EetMainComponent } from './eet-main/eet-main.component';
import { CaDocReportsComponent } from './ca-doc-reports/ca-doc-reports.component';
import { SearchStatusComponent } from './search-status/search-status.component';
import { EetErrorsComponent } from './eet-errors/eet-errors.component';
import { JobScheduleComponent } from './job-schedule/job-schedule.component';
import { GroupMappingComponent } from './group-mapping/group-mapping.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    EetMainComponent,
    CaDocReportsComponent,
    SearchStatusComponent,
    EetErrorsComponent,
    JobScheduleComponent,
    GroupMappingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
