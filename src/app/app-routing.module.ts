import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {StoreShippingInComponent} from './components/store-shipping-in/store-shipping-in.component';
import {StoreShippingOutComponent} from './components/store-shipping-out/store-shipping-out.component';
import {GoodsCheckingComponent} from './components/goods-checking/goods-checking.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainComponent},
  {path: 'goods-checking', component: GoodsCheckingComponent},
  {path: 'ship-in', component: StoreShippingInComponent},
  {path: 'ship-out', component: StoreShippingOutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
