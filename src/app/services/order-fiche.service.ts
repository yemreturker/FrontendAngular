import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderFicheDto } from '../models/entities/DTOs/orderFicheDto';
import { OrderFiche } from '../models/entities/orderFiche';
import { DataResponseModel } from '../models/responseModels/dataResponseModel';
import { ListResponseModel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class OrderFicheService {

  apiBaseUrl = 'https://localhost:7000/api';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<OrderFiche>> {
    var path = this.apiBaseUrl + "/orderfiches/all";
    return this.httpClient.get<ListResponseModel<OrderFiche>>(path);
  }

  getById(id:number): Observable<DataResponseModel<OrderFiche>> {
    var path = this.apiBaseUrl + '/orderfiches?id=' + id;
    return this.httpClient.get<DataResponseModel<OrderFiche>>(path);
  }
  
  getDetails(id: number): Observable<DataResponseModel<OrderFicheDto>> {
    var path = this.apiBaseUrl + 'orderfiches/details?id=' + id;
    return this.httpClient.get<DataResponseModel<OrderFicheDto>>(path);
  }

  add(orderfiche: OrderFiche) {
    var path = this.apiBaseUrl + '/orderfiches/add';
    return this.httpClient.post(path, orderfiche);
  }

  delete(id:number) {
    var path = this.apiBaseUrl + '/orderfiches/delete?id=' + id;
    return this.httpClient.delete(path);
  }
}