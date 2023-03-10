import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListpostsComponent } from './listposts/listposts.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { EditpostComponent } from './editpost/editpost.component';
const routes: Routes = [
  {
    path: '', component: ListpostsComponent
  },
  {
    path: 'create/post', component: CreatepostComponent 
  },
  {
    path: 'edit/post/:post_id', component: EditpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
