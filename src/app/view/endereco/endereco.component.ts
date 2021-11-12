import { Endereco } from './../../model/endereco';
import { EnderecoService } from './../../service/endereco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  cep = '';
  endereco? : Endereco;
  isLoading=false;

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }

  consultar():void{
    this.enderecoService.obterEndereco(this.cep).subscribe(end => {
      this.endereco=end;
      this.isLoading = false;
    });
    this.isLoading = true;
 }

}
