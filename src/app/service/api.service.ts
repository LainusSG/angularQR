import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private UrlApi1 = "https://rickandmortyapi.com/api/character/31";
  private UrlApi2 = "https://rickandmortyapi.com/api/character/32";
  private UrlApi3 = "https://rickandmortyapi.com/api/character/33";
  private UrlApi4 = "https://rickandmortyapi.com/api/character/34";
  private UrlApi5 = "https://rickandmortyapi.com/api/character/35";

  constructor(private http: HttpClient) { }

  public getData1(): Observable<any>{
    return this.http.get<any>(this.UrlApi1)
  }

  public getData2(): Observable<any>{
    return this.http.get<any>(this.UrlApi2)
  }
  
  public getData3(): Observable<any>{
    return this.http.get<any>(this.UrlApi3)
  }

  public getData4(): Observable<any>{
    return this.http.get<any>(this.UrlApi4)
  }

  public getData5(): Observable<any>{
    return this.http.get<any>(this.UrlApi5)
  }
}
