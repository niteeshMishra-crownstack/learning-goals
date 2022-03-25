import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGaurdService } from './services/gaurds/auth-gaurd.service';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent //localhost:4200
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGaurdService]
  },
  {
    path: 'user/:id/:name', component: UserComponent
  },
  {
    path: 'categories', component: CategoriesComponent, data: { name: 'stationary', quantity: 100, saler: 'mehta book industries' }
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
