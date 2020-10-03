import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http: HttpClient) { }
  fetchLatestNews()
  {
    const url="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=74da004083014362a442eb198a6d2fde";
    return this.http.get(url);
  }
}
