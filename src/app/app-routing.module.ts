import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'products', canActivate:[AuthGuard], component:ProductsComponent},
  {path:'product details/:id', canActivate:[AuthGuard], component:ProductDetailsComponent},
  {path:'dashboard',canActivate:[AuthGuard] ,loadChildren:()=> import('./product/product.module').then(m => m.ProductModule)},
  {path:'**',redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
