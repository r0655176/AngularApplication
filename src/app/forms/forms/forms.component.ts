import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/Models/Student';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  model = new StudentModel("Voor Naam", "Naam")

  ngOnInit() {

    this.student2Form.valueChanges.subscribe(val => {
      console.log(val.voornaam + " " + val.naam);
    });

    this.student2Form.get('voornaam').valueChanges.subscribe(val => {
      console.log("Nieuwe waarde voornaam: " + val);
    })

  }

  onSubmit(){
    console.log(this.model);
  }
  onSubmit2(){
    console.log(this.model);
  }
  onSubmit3(){
    console.log(this.model);
  }

  student2Form = new FormGroup({
    voornaam: new FormControl("", Validators.required),
    naam: new FormControl("", Validators.required),
  });

  constructor(private fb: FormBuilder) { }

  student3Form = this.fb.group({
    voornaam: ["", Validators.required],
    naam: ["", Validators.required],
  });

  consoleclass: string [] = ['consoleclass','border'];
  codeclass: string [] = ['codeclass','border'];
}
