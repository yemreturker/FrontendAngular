import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/layout/navi/navi.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { TableComponent } from './components/table/table/table.component';
import { TableDetailComponent } from './components/table/table-detail/table-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { TableDetailProductAddComponent } from './components/table/table-detail-product-add/table-detail-product-add.component';
import { TableDetailPaymentComponent } from './components/table/table-detail-payment/table-detail-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    FooterComponent,
    TableComponent,
    TableDetailComponent,
    LoginComponent,
    RegisterComponent,
    TableDetailProductAddComponent,
    TableDetailPaymentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
