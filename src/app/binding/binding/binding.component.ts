import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title = 'Interpollation';
  imageUrl= "https://angular.io/generated/images/guide/architecture/databinding.png";
  imageAlt = "PropertyBinding";
  onButtonClick() {
    alert('Ya wanted an alert, mate?');
  }
  constructor() { }

  ngOnInit() {
  }

  consoleclass: string [] = ['consoleclass','border'];
  codeclass: string [] = ['codeclass','border'];
}
