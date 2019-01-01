import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routinghome',
  templateUrl: './routinghome.component.html',
  styleUrls: ['./routinghome.component.css']
})
export class RoutinghomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  consoleclass: string [] = ['consoleclass','border'];
  codeclass: string [] = ['codeclass','border'];
}
