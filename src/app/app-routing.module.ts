import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { TableDetailProductAddComponent } from './components/table-detail-product-add/table-detail-product-add.component';
import { TableDetailComponent } from './components/table-detail/table-detail.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: "", component:TableComponent },
  { path: "tables", component:TableComponent },
  { path: "table/:tableId", component:TableDetailComponent },
  { path: "table/:tableId/add", component:TableDetailProductAddComponent },

  { path: "auth", component:LoginComponent },
  { path: "auth/login", component:LoginComponent },
  { path: "auth/register", component:RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
