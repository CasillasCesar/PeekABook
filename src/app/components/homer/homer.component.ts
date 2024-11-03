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
    "assets\dummies\portada-calavera-dia-de-muertos.webp",
    "assets\dummies\los-elementos-de-un-altar-de-muertos.jpg",
    "https://www.caminoreal.com/storage/app/media/Blog/los-elementos-de-un-altar-de-muertos.jpg"
  ]
  constructor(private bookService : BooksService){
    this.items = this.bookService.getDummiBooks()
  }
}
