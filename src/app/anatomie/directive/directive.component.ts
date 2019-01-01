import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  title = 'Directive';

  constructor() { }

  isNotLoremIpsum: boolean = true;
  frameworks: string[] = ["Angular", "React", "Vue"];
  klasses: string [] = ['blue','bold'];
  score = 100;
  rainbow: string [] = ['red','orange',"yellow","green","blue","indigo","violet"];
  ngOnInit() {
  }

  consoleclass: string [] = ['consoleclass','border'];
  codeclass: string [] = ['codeclass','border'];
}
