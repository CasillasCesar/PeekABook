import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email]],
      phoneNumber: ['',[Validators.pattern('^[0-9]{10}$')]],
      state: ['', Validators.required],
      city: ['', Validators.required],
      calif: [5] // Valor predeterminado de calificación, sin incluir en el formulario visible
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      console.log('Registro exitoso:', userData);
      // Aquí puedes enviar `userData` al servidor
    }
  }
}
