import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(environment.apiEndPoint + 'cliente')
  }
}
