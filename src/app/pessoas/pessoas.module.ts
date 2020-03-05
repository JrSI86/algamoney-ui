import { InputMaskModule } from 'primeng/inputmask';
import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { SharedModule } from './../shared/shared.module';

import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';



@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,

    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    MessagesModule,
    MessageModule
  ],
  exports: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent
  ],
})
export class PessoasModule { }
