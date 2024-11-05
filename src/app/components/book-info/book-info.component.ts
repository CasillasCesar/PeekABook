import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Route } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { BookCard } from '../../models/book-card';
import { User } from '../../models/user';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent {
  loged : Boolean = false;
  book : Book = {} as Book;
  user : User = {} as User;
  bookId : number = 0;
  items : BookCard[] = [];
  constructor(private bookService : BooksService, private route : ActivatedRoute){
    this.items = this.bookService.getDummiBooks()
    this.route.data.subscribe(data=>{
      this.loged = data['loged']
    }).unsubscribe()
    this.route.paramMap.subscribe((param : any)=>{
      this.bookId = param['params']['id']
    }).unsubscribe()
    this.book = this.items[this.bookId]['dataBook']
    this.user = this.items[this.bookId]['user']

  }
}
