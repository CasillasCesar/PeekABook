import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BookCard } from '../models/book-card';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  dummiUser : User = {
    _id: 1,
    name: "Anon",
    email: "anon@gmail.com",
    phoneNumber: 4777777777,
    state: "Guanajuato",
    city: "Leon",
    credits : 0
  }

  dummiBooks : Array<BookCard> = [
    {
      dataBook: {
        title: "El retrato de Dorian Gray",
        author: ["Oscar Wilde"],
        isbn: 9780141439570,
        editorial: "Penguin Books",
        pubYear: new Date(1890, 0, 1),
        edition: 1,
        format: 'Hardcover',
        language: "English",
        genre: ["Fiction", "Classic"],
        synopsis: "A story of moral corruption and the pursuit of beauty.",
        keywords: ["moral", "corruption", "beauty"],
        numPages: 254,
        location: "Shelf A3",
        price: 150,
        images: ["https://m.media-amazon.com/images/I/715UkzCWuuL._AC_UF1000,1000_QL80_.jpg"],
        description: "A classic novel about moral corruption and vanity.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Oscar Rodriguez",
        email: "user@gmail.com",
        phoneNumber: 4777777777,
        state: "Guanajuato",
        city: "Leon",
      }
    },
    {
      dataBook: {
        title: "Cien años de soledad",
        author: ["Gabriel García Márquez"],
        isbn: 9780307474728,
        editorial: "Sudamericana",
        pubYear: new Date(1967, 5, 5),
        edition: 1,
        format: 'Paperback',
        language: "Spanish",
        genre: ["Fiction", "Magical Realism"],
        synopsis: "The multi-generational story of the Buendía family.",
        keywords: ["family", "magic", "Colombia"],
        numPages: 417,
        location: "Shelf B1",
        price: 200,
        images: [
          "https://http2.mlstatic.com/D_NQ_NP_895317-MLM44487866188_012021-O.webp",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCd5a7ZqCEh4EBX12Pept8gW8DRWo7NLXgQJHWuN0udrJYs_FD2SrM4wQyM2O8r8XVBw&usqp=CAU"
        ],
        description: "An iconic novel in Latin American literature.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Maria Lopez",
        email: "maria.lopez@gmail.com",
        phoneNumber: 4412345678,
        state: "Mexico City",
        city: "Mexico City"
      }
    },
    {
      dataBook: {
        title: "To Kill a Mockingbird",
        author: ["Harper Lee"],
        isbn: 9780061120084,
        editorial: "J.B. Lippincott & Co.",
        pubYear: new Date(1960, 6, 11),
        edition: 1,
        format: 'Paperback',
        language: "English",
        genre: ["Fiction", "Classic"],
        synopsis: "A young girl's journey in a racially divided Southern town.",
        keywords: ["racism", "justice", "South"],
        numPages: 281,
        location: "Shelf C2",
        price: 120,
        images: ["https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg"],
        description: "An American classic exploring racial injustice.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Juan Hernandez",
        email: "juan.hernandez@gmail.com",
        phoneNumber: 4423456789,
        state: "Jalisco",
        city: "Guadalajara"
      }
    },
    {
      dataBook: {
        title: "1984",
        author: ["George Orwell"],
        isbn: 9780451524935,
        editorial: "Secker & Warburg",
        pubYear: new Date(1949, 5, 8),
        edition: 1,
        format: 'Hardcover',
        language: "English",
        genre: ["Dystopian", "Political Fiction"],
        synopsis: "A society under total surveillance and authoritarian rule.",
        keywords: ["totalitarianism", "surveillance", "freedom"],
        numPages: 328,
        location: "Shelf A1",
        price: 170,
        images: ["https://m.media-amazon.com/images/I/91jHOlKEPwL.jpg"],
        description: "A classic warning against authoritarianism.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Ana Perez",
        email: "ana.perez@gmail.com",
        phoneNumber: 4434567890,
        state: "Nuevo Leon",
        city: "Monterrey"
      }
    },
    {
      dataBook: {
        title: "Brave New World",
        author: ["Aldous Huxley"],
        isbn: 9780060850524,
        editorial: "Chatto & Windus",
        pubYear: new Date(1932, 0, 1),
        edition: 1,
        format: 'Hardcover',
        language: "English",
        genre: ["Science Fiction", "Dystopian"],
        synopsis: "A society driven by technology and hedonism.",
        keywords: ["technology", "control", "happiness"],
        numPages: 311,
        location: "Shelf B2",
        price: 160,
        images: ["https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"],
        description: "A dystopian vision of the future dominated by pleasure.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Luis Martinez",
        email: "luis.martinez@gmail.com",
        phoneNumber: 4445678901,
        state: "Chiapas",
        city: "Tuxtla Gutierrez"
      }
    },
    {
      dataBook: {
        title: "The Catcher in the Rye",
        author: ["J.D. Salinger"],
        isbn: 9780316769488,
        editorial: "Little, Brown and Company",
        pubYear: new Date(1951, 6, 16),
        edition: 1,
        format: 'Paperback',
        language: "English",
        genre: ["Fiction", "Coming-of-Age"],
        synopsis: "A teenage boy's journey through New York City.",
        keywords: ["youth", "identity", "rebellion"],
        numPages: 277,
        location: "Shelf C1",
        price: 110,
        images: ["https://m.media-amazon.com/images/I/91fQEUwFMyL._AC_UF1000,1000_QL80_.jpg"],
        description: "A classic tale of teenage alienation.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Carla Torres",
        email: "carla.torres@gmail.com",
        phoneNumber: 4456789012,
        state: "Michoacán",
        city: "Morelia"
      }
    },
    {
      dataBook: {
        title: "Pride and Prejudice",
        author: ["Jane Austen"],
        isbn: 9781503290563,
        editorial: "T. Egerton, Whitehall",
        pubYear: new Date(1813, 0, 28),
        edition: 1,
        format: 'Hardcover',
        language: "English",
        genre: ["Romance", "Classic"],
        synopsis: "A romantic story of manners and relationships.",
        keywords: ["romance", "society", "marriage"],
        numPages: 279,
        location: "Shelf D1",
        price: 130,
        images: ["c:\Users\krato\AppData\Local\Temp\MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg"],
        description: "A timeless romance in the English countryside.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Estela Ruiz",
        email: "estela.ruiz@gmail.com",
        phoneNumber: 4467890123,
        state: "Hidalgo",
        city: "Pachuca"
      }
    },
    {
      dataBook: {
        title: "The Great Gatsby",
        author: ["F. Scott Fitzgerald"],
        isbn: 9780743273565,
        editorial: "Charles Scribner's Sons",
        pubYear: new Date(1925, 3, 10),
        edition: 1,
        format: 'Paperback',
        language: "English",
        genre: ["Fiction", "Classic"],
        synopsis: "A portrayal of the American dream and excess.",
        keywords: ["wealth", "love", "American Dream"],
        numPages: 180,
        location: "Shelf E2",
        price: 140,
        images: ["https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"],
        description: "A reflection on the American dream.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Javier Castro",
        email: "javier.castro@gmail.com",
        phoneNumber: 4478901234,
        state: "Morelos",
        city: "Cuernavaca"
      }
    },
    {
      dataBook: {
        title: "Don Quijote de la Mancha",
        author: ["Miguel de Cervantes"],
        isbn: 9788491050168,
        editorial: "Francisco de Robles",
        pubYear: new Date(1605, 0, 16),
        edition: 1,
        format: 'Hardcover',
        language: "Spanish",
        genre: ["Adventure", "Classic"],
        synopsis: "The adventures of a knight and his loyal squire.",
        keywords: ["adventure", "chivalry", "humor"],
        numPages: 863,
        location: "Shelf F1",
        price: 250,
        images: ["https://www.plutonediciones.com/site/wp-content/uploads/2022/04/Don-Quijote.jpg"],
        description: "A masterpiece of Spanish literature.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Pablo Jimenez",
        email: "pablo.jimenez@gmail.com",
        phoneNumber: 4489012345,
        state: "Oaxaca",
        city: "Oaxaca"
      }
    },
    {
      dataBook: {
        title: "Moby Dick",
        author: ["Herman Melville"],
        isbn: 9781503280786,
        editorial: "Harper & Brothers",
        pubYear: new Date(1851, 10, 14),
        edition: 1,
        format: 'Paperback',
        language: "English",
        genre: ["Adventure", "Classic"],
        synopsis: "A sea captain's obsession with a great white whale.",
        keywords: ["adventure", "sea", "obsession"],
        numPages: 635,
        location: "Shelf G1",
        price: 180,
        images: ["https://m.media-amazon.com/images/I/71K4OH9CqOL._UF894,1000_QL80_.jpg"],
        description: "A gripping tale of man vs. nature.",
        ownerId : "1"
      },
      user: {
        _id:1,
        credits : 0,
        name: "Miguel Ortiz",
        email: "miguel.ortiz@gmail.com",
        phoneNumber: 4490123456,
        state: "Veracruz",
        city: "Veracruz"
      }
    }
  ];

  constructor() { }

  getDummiBooks():Array<BookCard>{
    return this.dummiBooks
  }
}
