import { Component, OnInit } from '@angular/core';
import { TarefaService } from './../shared';
import { Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];
  concluidos: Tarefa[];
  aFazer: Tarefa[];

  constructor( private tarefaService: TarefaService ) { }

  ngOnInit(): void {

    this.tarefas = this.listarTodos();

    this.aFazer = this.listarAFazer();
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
    console.log('teste')
  }

  atualizarStatus( id: number ): void {
    this.tarefaService.atualizarStatus( id );
  }

  remover( id: number ):void {
    this.tarefaService.remover(id);
    this.ngOnInit();
  }
}
