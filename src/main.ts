import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  imports:[ReactiveFormsModule, CommonModule]
})
export class App {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      m_nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      jour: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      mois: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      annee: ['', [Validators.required, Validators.min(1900)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      alert('Formulaire envoyé !');
    }
  }

}

bootstrapApplication(App);
