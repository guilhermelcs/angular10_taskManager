import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor( private tarefaService: TarefaService ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if ( this.formTarefa.form.valid ) {
      this.tarefa.concluido = false;
      this.tarefaService.cadastrar( this.tarefa );
      console.log('dialog');
    }
  }
}
