import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.inscriptionForm.valid) {
      alert('Veuillez remplir correctement le formulaire.');
      return;
    }

    // Conversion du FormGroup en FormData
    const formData = new FormData();
    Object.entries(this.inscriptionForm.value).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value as string);
      }
    });

    const data = { ...this.inscriptionForm.value };
    console.log('Données du formulaire :', data);

    // Reprise exacte de ta logique fetch
    fetch('http://localhost:8080/participants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        alert('Inscription réussie ! Merci pour votre inscription.');
        console.log('Données du formulaire :', result);

        this.inscriptionForm.reset();
      })
      .catch((error) => {
        console.error("Erreur lors de l'inscription :", error);
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
      });
  }
}
