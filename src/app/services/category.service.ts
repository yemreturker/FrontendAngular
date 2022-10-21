import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/entities/category';
import { DataResponseModel } from '../models/responseModels/dataResponseModel';
import { ListResponseModel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiBaseUrl = 'https://localhost:7000/api';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Category>> {
    var path = this.apiBaseUrl + "/categories/all";
    return this.httpClient.get<ListResponseModel<Category>>(path);
  }
  getById(id:number): Observable<DataResponseModel<Category>> {
    var path = this.apiBaseUrl + '/categories?id=' + id;
    return this.httpClient.get<DataResponseModel<Category>>(path);
  }
  add(category: Category) {
    var path = this.apiBaseUrl + '/categories/add';
    return this.httpClient.post(path, category);
  }
  delete(id:number) {
    var path = this.apiBaseUrl + '/categories/delete?id=' + id;
    return this.httpClient.delete(path);
  }
}
