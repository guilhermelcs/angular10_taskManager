import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefasComponent } from './listar/listar-tarefas.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';



@NgModule({
  declarations: [ListarTarefasComponent, CadastrarTarefaComponent, CadastrarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
