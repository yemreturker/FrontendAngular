import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/models/authModels/currentUser';
import { Table } from 'src/app/models/entities/table';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  tables: Table[] = [];
  
  constructor(
    private tableService: TableService,
    private _router: Router) { }

  ngOnInit(): void {
    if (CurrentUser.token.length < 1) { 
      this._router.navigate(["/auth"]);
    }
    this.getTables();
  }
  getTables() {
    this.tableService.getTables().subscribe(
      response => {
        if (response.isSuccess) this.tables = response.data;
        else console.error(response.message);
      }, 
      error => {
        if (error) console.error(error.message);
    })
  }
  goTableDetails(table:Table) {
    this._router.navigate(["/table/",table.id]);
  }
}
