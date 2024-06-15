import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  getStatus(): Promise<any> {
    return this.http.get('https://sua-api.com/status').toPromise();
  }
}
