import { Component } from '@angular/core';
import { BookCard } from '../../models/book-card';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-homer',
  templateUrl: './homer.component.html',
  styleUrl: './homer.component.css'
})
export class HomerComponent {
  items : BookCard[] = [];
  images = [
    {
      url:"assets/los-elementos-de-un-altar-de-muertos.jpg",
      content : {
        title: 'Día de Muertos',
        message: 'Explora recetarios únicos para Día de Muertos y más.',
        position: 'center',
      }
    },
    {
      url:"assets/portada-calavera-dia-de-muertos.webp",
      content : {
        title: 'Folclor Mexicano',
         message: 'Descubre historias y tradiciones de nuestro folclor.',
        position: 'right'
       }
    },
    {
      url:"assets/halloween.gif",
      content : {
        title: 'Halloween y Misterio',
        message: 'Lee y comparte historias de Halloween y misterios.',
        position:'top'
      }
    },
  ]

  constructor(private bookService : BooksService){
    this.items = this.bookService.getDummiBooks()
  }

  register() {
    // Acción de registro (navegar a la página de registro o abrir un modal)
  }
}
