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

    this.tarefas = [
      new Tarefa(1, "Olá Angular", "Projeto foda feito por: Mateus Pires e Guilherme Lucas", false),
      new Tarefa(2, "Olá Concluido", "Projeto foda feito por: Mateus Pires e Guilherme Lucas", true)
    ]

    this.aFazer = [
      new Tarefa(3, "Olá Angular", "Projeto foda feito por: Mateus Pires e Guilherme Lucas", false),
    ];

    this.concluidos = [
      new Tarefa(4, "Olá Concluido", "Projeto foda feito por: Mateus Pires e Guilherme Lucas", true),
      new Tarefa(5, "Olá Angular", "Projeto foda feito por: Mateus Pires e Guilherme Lucas", true),
    ];
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
  }

  atualizarStatus( id: number ): void {
    this.tarefaService.atualizarStatus( id );
  }
}
