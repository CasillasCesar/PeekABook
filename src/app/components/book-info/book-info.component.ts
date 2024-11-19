import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Route } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { BookCard } from '../../models/book-card';
import { User } from '../../models/user';
import { DOCUMENT, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent {

  @ViewChild('bookContainer') bookContainer!: ElementRef;

  loged : Boolean = false;
  book : Book = {} as Book;
  user : User = {} as User;
  bookId : number = 0;
  items : BookCard[] = [];

  constructor(private bookService : BooksService, private route : ActivatedRoute,private viewportScroller: ViewportScroller, @Inject(DOCUMENT) private document: Document){
    this.items = this.bookService.getDummiBooks()
  }

  ngOnInit(): void {
    // Escucha los cambios en los datos de la ruta
    this.route.data.subscribe(data => {
      this.loged = data['loged'];
    });

    // Escucha los cambios en los parámetros de la ruta
    this.route.paramMap.subscribe(paramMap => {
      const bookId = Number(paramMap.get('id')); // Convierte el parámetro en número
      this.loadBook(bookId);
      this.scrollToTop();
    });
  }

  private loadBook(bookId: number): void {
    const full = this.items.find(book => book.dataBook._id === bookId);

    if (full) {
      this.book = full.dataBook;
      this.user = full.user;
    }
  }

  private scrollToTop(): void {
    const body = this.document.querySelector('#body');
    if (body) {
      body.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
