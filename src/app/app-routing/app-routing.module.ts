import { DecrementComponent } from './../component/decrement/decrement.component';
import { IncrementComponent } from './../component/increment/increment.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router'

import { UsersComponent } from './../component/users/users.component';
import { SubjectComponent } from './../component/subject/subject.component';
import { PlaceholderComponent } from './../component/placeholder/placeholder.component';
import { UserDetailsComponent } from './../component/user-details/user-details.component';
import { UserComponent } from './../component/user/user.component';
import { AuthGuard } from './../guard/auth/auth.guard';
import { BuildInAtrDirComponent } from './../component/build-in-atr-dir/build-in-atr-dir.component';
import { BuildInStrDirComponent } from './../component/build-in-str-dir/build-in-str-dir.component';
import { DirectivesComponent } from './../component/directives/directives.component';
import { TemplateFormComponent } from './../component/template-form/template-form.component';
import { ReactiveFormComponent } from './../component/reactive-form/reactive-form.component';
import { PipeComponent } from './../component/pipe/pipe.component';

const appRoutes :Routes =[
  {
    path :'users',
    component:UsersComponent ,
    canActivateChild:[AuthGuard] , 
    children:[
      {
        path :':id',
        component:UserDetailsComponent
      },
      {
        path:'',
        component:PlaceholderComponent
      }
  ]},
  {
    path:'subject',
    component:SubjectComponent
  },
  {
    path:'build-atr',
    component:BuildInAtrDirComponent
  },
  {
    path:'build-str',
    component:BuildInStrDirComponent
  },
  {
    path:'pipes',
    component:PipeComponent
  },
  {
    path:'directives',
    component:DirectivesComponent
  },
  {
    path:'template-forms',
    component:TemplateFormComponent
  },
  {
    path:'reactive-forms',
    component:ReactiveFormComponent
  },
  {
    path :'**',
    redirectTo:'/users',
    pathMatch:'full'
  },
  {
    path :'',
    redirectTo:'/users',
    pathMatch:'full'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: [],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
