import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { TeamsComponentModule } from './components/teams/teams.component-module';
import { ProjectsComponentModule } from './components/projects/projects.component-module';
import { TasksComponentModule } from './components/tasks/tasks.component-module';
import { EmployeesComponentModule } from './components/employees/employees.component-module';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'employees', component: EmployeesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TeamsComponentModule,
    ProjectsComponentModule,
    TasksComponentModule,
    EmployeesComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
