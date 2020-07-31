import { Component, OnInit } from '@angular/core';
import { TarefaService } from './../shared';
import { Tarefa } from '../shared';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];
  concluidos: Tarefa[];
  aFazer: Tarefa[];

  constructor( private tarefaService: TarefaService, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    this.aFazer = this.listarAFazer();
    this.concluidos = this.listarConcluidos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  listarConcluidos(): Tarefa[] {
    return this.tarefaService.listarConcluidos();
  }

  listarAFazer(): Tarefa[] {
    return this.tarefaService.listarAFazer();
  }

  cadastrar( tarefa: Tarefa ): void {
    this.tarefaService.cadastrar(tarefa);
    this.ngOnInit();
  }

  atualizarStatus( id: number ): void {
    this.tarefaService.atualizarStatus( id );
    this.ngOnInit();
    const snackBarRef = this.openSnackBar( this.tarefaService.getStatus( id ) ? 'Tarefa Concluída !' : 'Tarefa Incompleta !', 'Desfazer' );
  }

  remover( id: number ): void {
    this.tarefaService.remover(id);
    this.ngOnInit();
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open( message, action, {
      duration: 2000,
    });
  }
}
