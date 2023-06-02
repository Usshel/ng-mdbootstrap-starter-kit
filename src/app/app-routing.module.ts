import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TeamsComponentModule } from './components/teams/teams.component-module';
import { ProjectsComponentModule } from './components/projects/projects.component-module';
import { TasksComponentModule } from './components/tasks/tasks.component-module';
import { EmployeesComponentModule } from './components/employees/employees.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import { EmployeeComponentModule } from './components/employee/employee.component-module';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', component: HomeComponent },
  { path: 'employee/:id', component: EmployeeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TeamsComponentModule,
    ProjectsComponentModule,
    TasksComponentModule,
    EmployeesComponentModule,
    HomeComponentModule,
    EmployeeComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
