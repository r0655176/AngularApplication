import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  naam: string;
  response: string;

  saveNaam() {
    localStorage.setItem("name", this.naam);
  }

  toonNaam() {
    this.response= localStorage.getItem("name");
  }

  consoleclass: string [] = ['consoleclass','border'];
  codeclass: string [] = ['codeclass','border'];
}
