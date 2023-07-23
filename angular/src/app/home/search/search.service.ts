import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Sales {
  id: number;
  name: string;
  amount: number;
  date: string;
}

export interface SalesFilter {
  name: string;
}

const url = 'http://localhost:3000/sales';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private http: HttpClient) { }

  async seachSales(filter: SalesFilter) {
    let params = new HttpParams();
    if (filter.name) {
      params = params.set('name', filter.name);
    }
    return this.http.get(url, { params }).toPromise();
  }

  async postSales(sales: Sales) {
    return this.http.post(url, sales).toPromise();
  }

  async putSales(sales: Sales) {
    return this.http.put(url + '/' + sales.id, sales).toPromise();
  }

  async deleteSales(sales: Sales) {
    return this.http.delete(url + '/' + sales.id).toPromise();
  }

}
