import { TarefaService } from './../services/tarefa.service';

export class Tarefa {
    constructor(
        public id?: number,
        public title?: string,
        public descricao?: string,
        public concluido?: boolean,
        public tarefaService?: TarefaService,
    ) {}
}