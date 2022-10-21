import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/entities/product';
import { TableCarts } from 'src/app/models/entities/tableCarts';
import { ProductService } from 'src/app/services/product.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table-detail-product-add',
  templateUrl: './table-detail-product-add.component.html',
  styleUrls: ['./table-detail-product-add.component.css']
})
export class TableDetailProductAddComponent implements OnInit {

  products: Product[] = [];
  tableId: number = 0;

  constructor(
    private productService: ProductService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private tableService: TableService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['tableId']) this.tableId = params["tableId"];
      else this._router.navigate(["/tables"]);
    });
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(
      response => {
        if (response.isSuccess) this.products = response.data;
        else console.error(response.message);
      }, 
      error => {
        if (error) console.error(error.message);
      }
    );
  }

  addProductToTable(product:Product) {
    var tableCart = TableCarts.find(x => x.tableId == this.tableId);
    if (product.unitsInStock > 0) {
      if (tableCart) {
        var tableItem = tableCart.tableItems.find(x => x.product.id == product.id);
        if (tableItem) {
          tableItem.quantity += 1;
        }
        else {
          tableCart.tableItems.push({product: product, quantity: 1});
        }
      }
      else {
        TableCarts.push({tableId: this.tableId, tableItems:[{product: product, quantity: 1}]});
      }
      this.productService.updateProductStock(product.unitsInStock - 1, product)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          if (error) console.error(error.message);
        }
      )
      var table = this.tableService.getTableById(this.tableId)
      .subscribe(
        response => {
          if (response.isSuccess) {
            this.tableService.changeTableStatus(response.data, true).subscribe(response => console.log(response), error => console.error(error));
          }
          else console.error(response.message);
        },
        error => {
          if (error) console.error(error.message);
        }
      );
    }
    this._router.navigate(['/table/' + this.tableId]);
  }
}