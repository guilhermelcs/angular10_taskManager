import { Injectable } from '@angular/core';
import { Tarefa } from '../';


@Injectable({
    providedIn: 'root'
})
export class TarefaService {

    constructor() { }

    listarTodos(): Tarefa[] {
        const tarefas = localStorage['tarefas'];
        return tarefas ? JSON.parse(tarefas) : [];
    }

    listarConcluidos(): Tarefa[] {
        const tarefas = this.listarTodos();
        const concluidos = tarefas.filter( obj => obj.concluido === true );
        return concluidos ? concluidos : [];
    }

    listarAFazer(): Tarefa[] {
        const tarefas = this.listarTodos();
        const aFazer = tarefas.filter( obj => obj.concluido === false );
        return aFazer ? aFazer : [];
    }

    cadastrar(tarefa: Tarefa): void {
        const tarefas = this.listarTodos();
        tarefa.id = new Date().getTime();
        tarefas.push(tarefa);
        localStorage['tarefas'] = JSON.stringify(tarefas);
    }

    buscarPorId(id: number): Tarefa {
        const tarefas = this.listarTodos();
        return tarefas.find(tarefa => tarefa.id === id);
    }

    atualizar(tarefa: Tarefa): void {
        const tarefas = this.listarTodos();
        tarefas.forEach((obj, index, tarefas) => {
            if (tarefa.id === obj.id) {
                tarefas[index] = tarefa;
            }
        });
    }

    remover(id: number): void {
        let tarefas = this.listarTodos();
        tarefas = tarefas.filter(obj => obj.id !== id);
        localStorage['tarefas'] = JSON.stringify(tarefas);
    }

    atualizarStatus(id: number): void {
        let tarefas: Tarefa[] = this.listarTodos();
        tarefas.forEach((obj, index, tarefas) => {
            if (obj.id === id) {
                tarefas[index].concluido = !tarefas[index].concluido;
            }
        });
        localStorage['tarefas'] = JSON.stringify(tarefas);
    }
}
