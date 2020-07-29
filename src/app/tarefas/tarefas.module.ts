import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefasComponent } from './listar/listar-tarefas.component';
import { MaterialModule } from '../material/material.module'



@NgModule({
  declarations: [ListarTarefasComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
