import { Component, Input } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { BookCard } from '../../models/book-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input('item') item : any;
  constructor(private roter : Router){

  }

  viewDetails(id:number){
    this.roter.navigate([`/home/book`,id])
  }
}
