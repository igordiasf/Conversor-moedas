import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListarSimbolosService {

  constructor(private http: HttpClient) { }

  listarSimbolos(): Observable<any> {
    return this.http.get("https://api.exchangerate.host/symbols");
  }

}
