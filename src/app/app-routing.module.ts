import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { PersonComponent } from './person/person.component';


const routes: Routes = [
  {path : 'persons', component: PersonComponent },
  {path : 'school', component: SchoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
