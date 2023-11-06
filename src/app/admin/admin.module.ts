import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashchartComponent } from './dashchart/dashchart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UsersComponent } from './users/users.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { UserFunModule } from './users/user-fun/user-fun.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcityCreateComponent } from './test/acity-create/acity-create.component';
import { AcityEditComponent } from './test/acity-edit/acity-edit.component';
import { AspecializationComponent } from './aspecialization/aspecialization.component';
// import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: DashchartComponent,
   
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  { path: 'admin/users', loadChildren: () => import('./users/user-fun/user-fun.module')
  .then(m => m.UserFunModule) }
];

@NgModule({
  declarations: [
    NavigationComponent,
    DashchartComponent,
    UsersComponent,
    TestComponent,
    AcityCreateComponent,
    AcityEditComponent,
    AspecializationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    HttpClientModule,
    UserFunModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [NavigationComponent,
    DashchartComponent,
    RouterModule
    
  ]
})
export class AdminModule { }
