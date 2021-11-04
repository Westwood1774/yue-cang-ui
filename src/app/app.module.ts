import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/admin/admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RestService} from './services/rest.service';
import {AuthenticationService} from './services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { StoreShippingInComponent } from './components/store-shipping-in/store-shipping-in.component';
import { StoreShippingOutComponent } from './components/store-shipping-out/store-shipping-out.component';
import { GoodsCheckingComponent } from './components/goods-checking/goods-checking.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputNumberModule} from 'primeng/inputnumber';
import {PaginatorModule} from 'primeng/paginator';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    AdminComponent,
    StoreShippingInComponent,
    StoreShippingOutComponent,
    GoodsCheckingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    InputNumberModule,
    PaginatorModule,
    InputMaskModule,
    CalendarModule,
  ],
  providers: [RestService, AuthenticationService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
