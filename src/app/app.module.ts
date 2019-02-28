import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule,MatSortModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch:'full'},
  { path: 'add-student', component: AddStudentComponent},
  { path: 'view-student', component: ViewStudentsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'reports', component: ReportsComponent},
  { path: '**',redirectTo: ''},
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule, MatInputModule, MatTableModule,BrowserAnimationsModule,MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AddStudentComponent,
    ViewStudentsComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardComponent,
    ReportsComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }