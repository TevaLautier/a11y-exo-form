import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  imports:[ReactiveFormsModule, FormsModule,  CommonModule]
})
export class App {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      // Adresse décomposée
      rue: [''],
      cp: ['', [ Validators.pattern('^[0-9]{5}$')]],
      ville: [''],
      // Date décomposée
      jj: ['', [Validators.required,Validators.min(1),Validators.max(31)]],
      mm: ['', [Validators.required,Validators.min(1),Validators.max(12)]],
      aaaa: ['', [Validators.required,Validators.min(1900),Validators.max(2026)]]
    
    });
  }

  valider() {
    this.submitted = true;
    if (this.form.valid) {
      alert('Formulaire envoyé !');
    }
  }

}

bootstrapApplication(App);
