import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-publish-book',
  templateUrl: './publish-book.component.html',
  styleUrls: ['./publish-book.component.css']
})
export class PublishBookComponent {
  bookForm: FormGroup;
  genres: string[] = [
    'Fiction',
    'Non-Fiction',
    'Science',
    'History',
    'Art',
    'Romance',
    'Adventure',
    'Magical Realism',
    'Political Fiction',
    'Dystopian',
    'Coming-of-Age'
  ];
  selectedImages: File[] = []; // Permitir múltiples imágenes

  constructor(private fb: FormBuilder, private booksService: BooksService) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', Validators.required],
      isbn: [null, [Validators.required, Validators.min(1000000000)]],
      editorial: [''],
      pubYear: ['', Validators.required],
      edition: [1, [Validators.required, Validators.min(1)]],
      format: ['Hardcover', Validators.required],
      language: ['', Validators.required],
      genre: ['', Validators.required],
      synopsis: [''],
      keywords: [''],
      numPages: [1, [Validators.required, Validators.min(1)]],
      location: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      images: [null, Validators.required], // Validar al menos una imagen
      description: ['']
    });
  }

  /**
   * Manejo de selección de imágenes
   */
  onImageSelected(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedImages = Array.from(files); // Convertir a array
      this.bookForm.patchValue({ images: this.selectedImages }); // Actualizar el control
      this.bookForm.get('images')?.updateValueAndValidity(); // Actualizar estado del control
    }
  }

  /**
   * Envío del formulario
   */
  onSubmit(): void {
    if (this.bookForm.valid && this.selectedImages.length > 0) {
      const formData = new FormData();

      // Agregar todos los campos del formulario excepto las imágenes
      Object.keys(this.bookForm.controls).forEach((key) => {
        if (key !== 'images') {
          formData.append(key, this.bookForm.get(key)?.value);
        }
      });

      // Agregar las imágenes individualmente
      this.selectedImages.forEach((image, index) => {
        formData.append(`images`, image, image.name);
      });

      // Enviar los datos a través del servicio
      this.booksService.publishBooks(formData).subscribe({
        next: (response: any) => {
          alert('Libro creado con éxito');
          console.log(response);
        },
        error: (err: any) => {
          alert('Error al guardar el libro');
          console.error(err);
        }
      });

    } else {
      alert('Por favor completa todos los campos y selecciona al menos una imagen.');
    }
  }

  /**
   * Método de depuración para mostrar el estado del formulario
   */
  show(): void {
    console.log(this.bookForm);
  }
}
