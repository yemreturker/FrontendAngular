import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http" 
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { Table } from '../models/entities/table';
import { DataResponseModel } from '../models/responseModels/dataResponseModel';
import { CurrentUser } from '../models/authModels/currentUser';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  
  apiBaseUrl = 'https://localhost:7000/api/';
  
  constructor(private httpClient: HttpClient) {}

  getTables(): Observable<ListResponseModel<Table>> {
    var path = this.apiBaseUrl + 'tables/all'; 
    return this.httpClient.get<ListResponseModel<Table>>(path);
  }

  getTableById(id: number): Observable<DataResponseModel<Table>> {
    var path = this.apiBaseUrl + 'tables?id=' + id;
    return this.httpClient.get<DataResponseModel<Table>>(path);
  }

  changeTableStatus(table:Table, status:boolean) {
    var path = this.apiBaseUrl + 'tables/update';
    table.status = status;
    return this.httpClient.post(path, table);
  }
}