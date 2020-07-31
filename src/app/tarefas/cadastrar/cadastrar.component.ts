import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Tarefa } from './../shared/modules/tarefa.model';
import { NgForm } from '@angular/forms';
import { TarefaService } from './../shared/services/tarefa.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit{

  constructor( public dialog: MatDialog ) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
