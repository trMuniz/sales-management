import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImmunizationRecordService {

  constructor(private http: HttpClient) { }

  getRecords(): Promise<any> {
    return this.http.get(url).toPromise();
  }

}

const url = 'http://localhost:3000/records/';