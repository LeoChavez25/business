import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewServiceComponent } from './components/new-service/new-service.component';
import { ReceivedMessagesComponent } from './components/received-messages/received-messages.component';
import { SentMessagesComponent } from './components/sent-messages/sent-messages.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ModalComponent } from './components/modal/modal.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LogInComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'users-list', component: UsersListComponent},
  {path: 'new-service', component: NewServiceComponent},
  {path: 'received-messages', component: ReceivedMessagesComponent},
  {path: 'sent-messages', component: SentMessagesComponent},
  {path: 'edit-user', component: EditUserComponent},
  {path: 'modal', component: ModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
