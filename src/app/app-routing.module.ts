import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './admin/test/test.component';
import { AcityCreateComponent } from './admin/test/acity-create/acity-create.component';


const routes: Routes = [
  // {
  //   path:'',
  //   component:DashchartComponent
  // },
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module')
  .then(m => m.AdminModule) },
  {
      path:'admin/cities',
      component:TestComponent
    },
    {
      path:'admin/cities/create',
      component:AcityCreateComponent
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
