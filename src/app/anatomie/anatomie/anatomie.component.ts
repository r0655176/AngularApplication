import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anatomie',
  templateUrl: './anatomie.component.html',
  styleUrls: ['./anatomie.component.css']
})
export class AnatomieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  consoleclass: string [] = ['consoleclass','border'];
  codeclass: string [] = ['codeclass','border'];
}
