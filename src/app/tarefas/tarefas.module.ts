import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefasComponent } from './listar/listar-tarefas.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
createdimport { CadastrarComponent } from './cadastrar';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [ListarTarefasComponent, CadastrarComponent, DialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    TarefaService
  ],
})

export class TarefasModule { }
