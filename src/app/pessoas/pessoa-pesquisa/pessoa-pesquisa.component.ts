import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {

  pessoas = [
    { nome: 'Valdeci Alves', cidade: 'São Lourenço', estado: 'PE', status: true},
    { nome: 'Moisés Alves', cidade: 'São Lourenço', estado: 'PE', status: true},
    { nome: 'Adrielle', cidade: 'Jaboatão', estado: 'PE', status: true},
    { nome: 'Mirella', cidade: 'Recife', estado: 'PE', status: false}
  ];

  ativo(ativo) {
    if (ativo === true) {
      return 'Inativar';
    } else {
        return 'Ativar';
      }
    }
  }
