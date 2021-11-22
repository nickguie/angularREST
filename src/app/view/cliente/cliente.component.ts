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
  cliente?: Cliente;
  modoEdicao = false;

  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.clienteService.listar().subscribe(clientes =>{
      this.clientes = clientes;

    });
  }

  novo(): void{
    this.cliente = new Cliente();
    this.modoEdicao = false;
  }

  cancelar(): void{
    this.cliente = undefined;
    this.listar();

  }

  salvar(): void{
    if(!this.modoEdicao){
      this.clienteService.inserir(this.cliente).subscribe(cliente =>{
        this.listar();
        this.cliente = undefined;
      });
    }
    else{
      this.clienteService.atualizar(this.cliente).subscribe(cliente =>{
        this.listar();
        this.cliente = undefined;
      });
    }
  }

  editar(cliente: Cliente): void{
    this.cliente = cliente;
    this.modoEdicao = true;
  }

  excluir(id? : number):void{
    if(!id){return};

    this.clienteService.excluir(id).subscribe(() =>{
      this.listar();
    });
    
  }

}
