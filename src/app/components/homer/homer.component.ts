import { Component } from '@angular/core';
import { BookCard } from '../../models/book-card';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homer',
  templateUrl: './homer.component.html',
  styleUrl: './homer.component.css'
})
export class HomerComponent {

  loged : boolean = false;

  items : BookCard[] = [];
  images = [
    {
      url:"assets/los-elementos-de-un-altar-de-muertos.jpg",
      content : {
        title: 'Día de Muertos',
        message: 'Explora recetarios únicos para Día de Muertos y más.',
        position: 'center',
        search : 'Recetas'
      }
    },
    {
      url:"assets/portada-calavera-dia-de-muertos.webp",
      content : {
        title: 'Folclor Mexicano',
         message: 'Descubre historias y tradiciones de nuestro folclor.',
        position: 'right',
        search : 'Leyendas Mexicanas'
       }
    },
    {
      url:"assets/halloween.gif",
      content : {
        title: 'Halloween y Misterio',
        message: 'Lee y comparte historias de Halloween y misterios.',
        position:'top',
        search : 'Halloween'
      }
    },
  ]

  constructor(private bookService : BooksService, private route : ActivatedRoute){
    this.items = this.bookService.getDummiBooks()
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.loged = data['loged'];
      console.log('Valor de loged:', this.loged); // Prueba a ver el valor en la consola
    });
  }

  register() {
    // Acción de registro (navegar a la página de registro o abrir un modal)
  }
  ver() {
    // Acción de registro (navegar a la página de registro o abrir un modal)
  }
}
