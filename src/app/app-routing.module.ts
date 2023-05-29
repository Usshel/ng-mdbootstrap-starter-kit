import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TeamsComponentModule } from './components/teams/teams.component-module';
import { ProjectsComponentModule } from './components/projects/projects.component-module';
import { TasksComponentModule } from './components/tasks/tasks.component-module';

const routes: Routes = [{ path: 'teams', component: TeamsComponent }, { path: 'projects', component: ProjectsComponent }, { path: 'tasks', component: TasksComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), TeamsComponentModule, ProjectsComponentModule, TasksComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
