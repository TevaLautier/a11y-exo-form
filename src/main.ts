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
      rue: ['', Validators.required],
      cp: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      ville: ['', Validators.required],
      // Date décomposée
      jj: ['', Validators.required],
      mm: ['', Validators.required],
      aaaa: ['', Validators.required]
    
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
