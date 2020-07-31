import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hack-component',
  templateUrl: './hack-component.component.html',
  styleUrls: ['./hack-component.component.css']
})
export class HackComponentComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.router.navigate(['/tarefas']);
  }

}
