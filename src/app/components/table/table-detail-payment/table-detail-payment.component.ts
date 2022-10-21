import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableCarts } from 'src/app/models/entities/tableCarts';
import { TableItem } from 'src/app/models/entities/tableItem';

@Component({
  selector: 'app-table-detail-payment',
  templateUrl: './table-detail-payment.component.html',
  styleUrls: ['./table-detail-payment.component.css']
})
export class TableDetailPaymentComponent implements OnInit {

  tableItems: TableItem[] = [];

  constructor(
    private _router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTableItem();
  }

  getTableItem() {
    this.activatedRoute.params.subscribe(params => {
      if (params["tableId"]) {
        var t  = TableCarts.find(x => x.tableId == params["tableId"]);
        if (t) {
          if (t.tableItems.length < 1) this._router.navigate(["/tables"]);
          else this.tableItems = t.tableItems;
        }
        else {
          this._router.navigate(["/tables"]);
        }
      }
    });
  }
}