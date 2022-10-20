import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUser } from '../models/authModels/currentUser';
import { Product } from '../models/entities/product';
import { DataResponseModel } from '../models/responseModels/dataResponseModel';
import { ListResponseModel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  apiBaseUrl = 'https://localhost:7000/api';
  
  constructor(private httpClient: HttpClient) {}
  
  getProducts(): Observable<ListResponseModel<Product>> {
    var path = this.apiBaseUrl + "/products/all";
    return this.httpClient.get<ListResponseModel<Product>>(path);
  }
  getProdcutById(id: number) : Observable<DataResponseModel<Product>> {
    var path = this.apiBaseUrl + '/products?id=' + id;
    return this.httpClient.get<DataResponseModel<Product>>(path); 
  }
  updateProductStock(newStock:number, product:Product) {
    const path = this.apiBaseUrl + '/Products/updateproductstock?newProductStock=' + newStock;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CurrentUser.token}`,
    });
    return this.httpClient.post(path, product, {headers: headers});
  }
}