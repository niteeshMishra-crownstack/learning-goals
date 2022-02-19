import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface todo {
  userid: number,
  id: number,
  title: string,
  completed: string
}

@Injectable({
  providedIn: 'root'
})



export class WebserviceService {

  apiUrl: "https://jsonplaceholder.typicode.com/todos/"

  constructor(private http: HttpClient) { }

  getTodos(): Observable<todo[]> {
    return this.http.get<todo[]>(this.apiUrl)
  }
}
