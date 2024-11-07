import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { BookCard } from '../../models/book-card';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  books: BookCard[] = [];
  filteredBooks: BookCard[] = [];
  loged: boolean = false;
  filterForm: FormGroup;
  categories: string[] = [
    'Fiction',
    'Non-Fiction',
    'Science',
    'History',
    'Art',
    'Recientes',
    'Magical Realism',
    'Political Fiction',
    'Science Fiction',
    'Coming-of-Age',
    'Romance',
    'Adventure'
  ];

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.books = this.bookService.getDummiBooks();
    this.filteredBooks = this.books;

    // Inicializar el formulario reactivo
    this.filterForm = this.fb.group({
      search: [''],
      category: [''],
      dateFrom: [''],
      dateTo: ['']
    });
  }

  ngOnInit(): void {
    // Suscribirse a cambios en la ruta
    this.route.url.subscribe(urlSegments => {
      // Obtén el último segmento de la ruta para determinar el género
      const lastSegment = urlSegments[urlSegments.length - 1].path;

      // Mapeo para categorías en función de la ruta
      const categoryMap: { [key: string]: string } = {
        'news': 'Recientes',
        'sci-ti': 'Science',
        'history': 'History',
        'art': 'Art',
        'fiction': 'Fiction',
        'magical-realism': 'Magical Realism',
        'political-dystopian': 'Political Fiction',
        'science-fiction': 'Science Fiction',
        'coming-of-age': 'Coming-of-Age',
        'romance': 'Romance',
        'adventure': 'Adventure',
        'non-fiction': 'Non-Fiction'
      };

      // Obtiene la categoría correspondiente al segmento de la ruta
      const category = categoryMap[lastSegment] || '';

      // Actualiza el formulario de filtros con la categoría, si existe
      if (category) {
        this.filterForm.patchValue({
          category: category
        });
      }else{
        this.filterForm.patchValue({
          search : lastSegment
        })
      }

      // Aplicar filtros iniciales
      this.applyFilters();
    });
  }

  applyFilters(): void {
    const { search, category, dateFrom, dateTo } = this.filterForm.value;

    this.filteredBooks = this.books.filter(book => {
      const matchesSearch = search ?
        book.dataBook.title.toLowerCase().includes(search.toLowerCase()) ||
        book.dataBook.author.some(author => author.toLowerCase().includes(search.toLowerCase()))
        : true;

      const matchesCategory = category ? book.dataBook.genre.includes(category) : true;

      const matchesDateFrom = dateFrom ? new Date(book.dataBook.pubYear) >= new Date(dateFrom) : true;
      const matchesDateTo = dateTo ? new Date(book.dataBook.pubYear) <= new Date(dateTo) : true;

      return matchesSearch && matchesCategory && matchesDateFrom && matchesDateTo;
    });
  }
}
