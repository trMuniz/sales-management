import { Component, OnInit } from '@angular/core';
import { Sales, SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  sales: Sales[] = [];
  name: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchSales();
  }

  async searchSales() {
    const response = await this.searchService.seachSales({ name: this.name });
    this.sales = response as Sales[];
  }

  async postSales(sales: Sales) {
    await this.searchService.postSales(sales);
    this.sales.push(sales);
    this.searchSales();
  }

  async putSales(sales: Sales) {
    await this.searchService.putSales(sales);
  }

  async deleteSales(sales: Sales) {
    await this.searchService.deleteSales(sales);
    const index = this.sales.indexOf(sales);
    this.sales.splice(index, 1);
  }

  displayedColumns: string[] = ['id', 'name', 'amount', 'date'];
  dataSource = this.sales;
}
