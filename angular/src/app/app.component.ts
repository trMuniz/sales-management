import { Component } from '@angular/core';

export interface Sales {
  id: number;
  name: string;
  amount: number;
  date: string;
}

const ELEMENT_DATA: Sales[] = [
  { id: 1, name: 'John', amount: 1000, date: '2021-01-01' },
  { id: 2, name: 'Jane', amount: 2000, date: '2021-01-02' },
  { id: 3, name: 'Bob', amount: 3000, date: '2021-01-03' },
  { id: 4, name: 'Mary', amount: 4000, date: '2021-01-04' },
  { id: 5, name: 'Adam', amount: 5000, date: '2021-01-05' },
  { id: 6, name: 'Eve', amount: 6000, date: '2021-01-06' },
  { id: 7, name: 'Mike', amount: 7000, date: '2021-01-07' },
  { id: 8, name: 'Kate', amount: 8000, date: '2021-01-08' },
  { id: 9, name: 'Tom', amount: 9000, date: '2021-01-09' },
  { id: 10, name: 'Lucy', amount: 10000, date: '2021-01-10' },
  { id: 11, name: 'Jack', amount: 11000, date: '2021-01-11' },
  { id: 12, name: 'Jill', amount: 12000, date: '2021-01-12' },
  { id: 13, name: 'Steve', amount: 13000, date: '2021-01-13' },
  { id: 14, name: 'Ellen', amount: 14000, date: '2021-01-14' },
  { id: 15, name: 'David', amount: 15000, date: '2021-01-15' },
  { id: 16, name: 'Sarah', amount: 16000, date: '2021-01-16' },
  { id: 17, name: 'Peter', amount: 17000, date: '2021-01-17' },
  { id: 18, name: 'Susan', amount: 18000, date: '2021-01-18' },
  { id: 19, name: 'Joe', amount: 19000, date: '2021-01-19' },
  { id: 20, name: 'Anne', amount: 20000, date: '2021-01-20' },
  { id: 21, name: 'Fred', amount: 21000, date: '2021-01-21' },
  { id: 22, name: 'Gina', amount: 22000, date: '2021-01-22' },
  { id: 23, name: 'Henry', amount: 23000, date: '2021-01-23' },
  { id: 24, name: 'Karen', amount: 24000, date: '2021-01-24' },
  { id: 25, name: 'Larry', amount: 25000, date: '2021-01-25' },
  { id: 26, name: 'Olivia', amount: 26000, date: '2021-01-26' },
  { id: 27, name: 'Paul', amount: 27000, date: '2021-01-27' },
  { id: 28, name: 'Rita', amount: 28000, date: '2021-01-28' },
  { id: 29, name: 'Tim', amount: 29000, date: '2021-01-29' },
  { id: 30, name: 'Wendy', amount: 30000, date: '2021-01-30' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sales-management-ui';

  displayedColumns: string[] = ['id', 'name', 'amount', 'date'];
  dataSource = ELEMENT_DATA;
}