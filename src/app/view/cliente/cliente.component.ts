import { ClienteService } from './../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = new Array<Cliente>();

  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.clienteService.listar().subscribe(clientes =>{
      this.clientes = clientes;

    });
  }

}
