import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-publish-book',
  templateUrl: './publish-book.component.html',
  styleUrl: './publish-book.component.css'
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
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder, private booksService : BooksService) {
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
      images: ['', Validators.required], // Se requiere al menos una imagen
      description: ['']
    });
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid && this.selectedImage) {
      const formData = new FormData();
      formData.append('title', this.bookForm.get('title')?.value);
      formData.append('author', this.bookForm.get('author')?.value);
      formData.append('isbn', this.bookForm.get('isbn')?.value);
      formData.append('editorial', this.bookForm.get('editorial')?.value);
      formData.append('pubYear', this.bookForm.get('pubYear')?.value);
      formData.append('edition', this.bookForm.get('edition')?.value);
      formData.append('format', this.bookForm.get('format')?.value);
      formData.append('language', this.bookForm.get('language')?.value);
      formData.append('genre', this.bookForm.get('genre')?.value);
      formData.append('synopsis', this.bookForm.get('synopsis')?.value);
      formData.append('keywords', this.bookForm.get('keywords')?.value);
      formData.append('numPages', this.bookForm.get('numPages')?.value);
      formData.append('location', this.bookForm.get('location')?.value);
      formData.append('price', this.bookForm.get('price')?.value);
      formData.append('description', this.bookForm.get('description')?.value);
      formData.append('image', this.selectedImage);

      this.booksService.publishBooks(formData).subscribe({
        next: (response:any) => {
          alert('Libro creado con éxito');
          console.log(response);
        },
        error: (err:any) => {
          alert('Error al guardar el libro');
          console.error(err);
        }
      });

    } else {
      alert('Por favor completa todos los campos y selecciona una imagen.');
    }
  }
}
