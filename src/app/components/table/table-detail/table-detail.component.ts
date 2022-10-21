import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/models/entities/table';
import {ActivatedRoute, Router} from "@angular/router";
import { TableService } from 'src/app/services/table.service';
import { TableCart } from 'src/app/models/entities/tableCart';
import { TableCarts } from 'src/app/models/entities/tableCarts';
import { Product } from 'src/app/models/entities/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css'],
})
export class TableDetailComponent implements OnInit {
  table: Table = {
    id: 0,
    name: '',
    capasity: 0,
    status: false,
    isDeleted: false,
  };
  tableCart:TableCart = {
    tableId: 0,
    tableItems: []
  };
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private tableService: TableService,
    private productService: ProductService,
    private _router: Router,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['tableId']) {
        this.getTableDetail(params["tableId"]);
        this.findTableItem(params["tableId"]);
      }
      else {
        this._router.navigate(["/tables"]);
      }
    });
  }

  getTableDetail(id: number) {
    this.tableService.getTableById(id)
    .subscribe(
      response => {
        if (response.isSuccess) this.table = response.data;
        else console.error(response.message);
      }, 
      error => {
        if (error) console.error(error.message);
      }
    );
  }

  findTableItem(id: number) {
    var NewtableCart = TableCarts.find(x => x.tableId == id);
    if (NewtableCart) {
      this.tableCart = NewtableCart;
    }
    else {
      TableCarts.push({
        tableId: id,
        tableItems: []
      });
    }
  }

  AddProductToTable() {
    this._router.navigate(['/table/' + this.table.id + '/add'])
  }

  updateTableCart() {
    var r = TableCarts.find(x => x.tableId == this.table.id);
    if (r) {
      this.tableCart = r;
    }
    else this._router.navigate(['/tables']);
  }

  deleteProductFromTable(product: Product) {
    console.log('product: ' + product.name);
    var tableItem = TableCarts.find(x => x.tableId == this.tableCart.tableId)?.tableItems.find(x => x.product.id == product.id);
    if (tableItem?.quantity) {
      if (tableItem.quantity > 1) {
        tableItem.quantity -= 1;
      }
      else {
        let index = TableCarts.find(x => x.tableId == this.tableCart.tableId)?.tableItems.indexOf(tableItem);
        if (index != undefined) {
          TableCarts.find(x=> x.tableId == this.tableCart.tableId)?.tableItems.splice(index, 1);
          this.tableService.changeTableStatus(this.table, false)
          .subscribe(response => console.log(response), error => console.error(error));
        }
      }
      this.productService.getProdcutById(product.id)
      .subscribe(
        response => {
          if (response.isSuccess) {
            if (response.data) {
              this.productService.updateProductStock(response.data.unitsInStock + 1, response.data)
              .subscribe(
                (response) => {
                  console.log(response);
                },
                (error) => {
                  if (error) console.error(error.message);
                }
              );
            }
          } 
          else console.error(response.message);
        },
        error => {
          if (error) console.error(error.message);
        }
      )
      this.updateTableCart();
    }
  }
}