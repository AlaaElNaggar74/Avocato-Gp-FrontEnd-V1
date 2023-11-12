import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './admin/test/test.component';
import { AcityCreateComponent } from './admin/test/acity-create/acity-create.component';
import { AcityEditComponent } from './admin/test/acity-edit/acity-edit.component';
import { AspecializationComponent } from './admin/aspecialization/aspecialization.component';
import { AspecializationsCreateComponent } from './admin/aspecialization/aspecializations-create/aspecializations-create.component';
import { AspecializationsEditComponent } from './admin/aspecialization/aspecializations-edit/aspecializations-edit.component';
import { CreateLawyerDeatailsComponent } from './admin/alawyer-details/create-lawyer-deatails/create-lawyer-deatails.component';
import { EditUserComponent } from './admin/users/user-fun/edit-user/edit-user.component';


const routes: Routes = [
  // {
  //   path:'',
  //   component:DashchartComponent
  // },
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module')
  .then(m => m.AdminModule) },
  {
    path:'admin/users/edit/:id',
    component:EditUserComponent
  },
  {
      path:'admin/cities',
      component:TestComponent
    },
    {
      path:'admin/cities/create',
      component:AcityCreateComponent
    },
    {
      path:'admin/cities/edit/:id',
      component:AcityEditComponent
    },
    {
      path:'admin/specializations',
      component:AspecializationComponent
    },
    {
      path:'admin/specializations/create',
      component:AspecializationsCreateComponent
    },
    {
      path:'admin/specializations/edit/:id',
      component:AspecializationsEditComponent
    },
    {
      path:'admin/lawyerDetails/create/:id',
      component:CreateLawyerDeatailsComponent
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
