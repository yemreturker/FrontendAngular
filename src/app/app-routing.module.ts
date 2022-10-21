import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { TableDetailPaymentComponent } from './components/table/table-detail-payment/table-detail-payment.component';
import { TableDetailProductAddComponent } from './components/table/table-detail-product-add/table-detail-product-add.component';
import { TableDetailComponent } from './components/table/table-detail/table-detail.component';
import { TableComponent } from './components/table/table/table.component';

const routes: Routes = [
  { path: "", component:TableComponent },
  { path: "tables", component:TableComponent },
  { path: "table/:tableId", component:TableDetailComponent },
  { path: "table/:tableId/add", component:TableDetailProductAddComponent },
  { path: "table/:tableId/payments", component:TableDetailPaymentComponent },

  { path: "auth", component:LoginComponent },
  { path: "auth/login", component:LoginComponent },
  { path: "auth/register", component:RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }