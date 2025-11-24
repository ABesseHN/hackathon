import { Routes } from '@angular/router';
import { AddTopicFormComponent } from '../app/add-topic-form/add-topic-form.component';
import { RegisterComponent } from './register/register.component';
import { RegisteredListComponent } from './registered-list/registered-list.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrentDashboardComponent } from './current-dashboard/current-dashboard.component';
import { TeamGeneratorComponent } from './team-generator/team-generator.component';


export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'addTopic', component: AddTopicFormComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'registerList', component: RegisteredListComponent },
    { path: 'topicList', component: TopicsListComponent },
    { path: 'dashboard', component: CurrentDashboardComponent },
    { path: 'teamgenerator', component: TeamGeneratorComponent }
];
