import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(environment.apiEndPoint + 'cliente');
  }

  inserir(cliente?: Cliente): Observable<Cliente>{
    if(!cliente){ return EMPTY };

    return this.http.post<Cliente>(environment.apiEndPoint + 'cliente', cliente);
  }

  atualizar(cliente?: Cliente): Observable<Cliente>{
    if(!cliente){ return EMPTY };
    return this.http.put<Cliente>(environment.apiEndPoint + 'cliente/' + cliente.id, cliente)
  }

  excluir(id: number): Observable<any>{
    if(id<=0){return EMPTY};

    return this.http.delete<any>(environment.apiEndPoint + 'cliente/' + id);
  }
}
