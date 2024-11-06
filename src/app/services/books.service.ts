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
    credits : 0,
    calif : 5
  }

  dummiBooks : Array<BookCard> = [
    {
      dataBook: {
        _id:1,
        title: "El retrato de Dorian Gray",
        author: ["Oscar Wilde"],
        isbn: 9780141439570,
        editorial: "Penguin Books",
        pubYear: new Date(1890, 0, 1),
        edition: 1,
        format: 'Hardcover',
        language: "English",
        genre: ["Fiction", "Classic"],
        synopsis: "En un mundo donde la belleza y la juventud se valoran por encima de todo, Dorian Gray descubre un oscuro secreto que le permite vivir eternamente joven mientras su retrato envejece en su lugar. Oscar Wilde teje una historia intrigante sobre el deseo, la decadencia y la búsqueda de la perfección. A través de los ojos de Dorian, los lectores se ven obligados a cuestionar el precio de la inmortalidad y los límites de la moralidad en un mundo superficial y corrompido por el narcisismo.",
        keywords: ["moral", "corruption", "beauty"],
        numPages: 254,
        location: "Shelf A3",
        price: 150,
        images: ["https://m.media-amazon.com/images/I/715UkzCWuuL._AC_UF1000,1000_QL80_.jpg"],
        description: "A classic novel about moral corruption and vanity.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Oscar Rodriguez",
        state: "Guanajuato",
        city: "Leon",
        calif : 5
      }
    },
    {
      dataBook: {
        _id:2,
        title: "Cien años de soledad",
        author: ["Gabriel García Márquez"],
        isbn: 9780307474728,
        editorial: "Sudamericana",
        pubYear: new Date(1967, 5, 5),
        edition: 1,
        format: 'Paperback',
        language: "Spanish",
        genre: ["Fiction", "Magical Realism"],
        synopsis: "En el mítico pueblo de Macondo, Gabriel García Márquez narra la historia de la familia Buendía, cuya vida está marcada por el amor, la soledad y los ecos del realismo mágico. Esta obra maestra de la literatura latinoamericana es un viaje épico que entrelaza generaciones en un ciclo de luchas, pasiones y maldiciones familiares. Con una prosa cautivadora, Márquez crea un universo lleno de color y magia, donde la historia, la identidad y el destino se entrelazan en una narrativa inolvidable.",
        keywords: ["family", "magic", "Colombia"],
        numPages: 417,
        location: "Shelf B1",
        price: 200,
        images: [
          "https://http2.mlstatic.com/D_NQ_NP_895317-MLM44487866188_012021-O.webp",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCd5a7ZqCEh4EBX12Pept8gW8DRWo7NLXgQJHWuN0udrJYs_FD2SrM4wQyM2O8r8XVBw&usqp=CAU"
        ],
        description: "An iconic novel in Latin American literature.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Maria Lopez",
        state: "Mexico City",
        city: "Mexico City",
        calif : 5
      }
    },
    {
      dataBook: {
        _id:3,
        title: "To Kill a Mockingbird",
        author: ["Harper Lee"],
        isbn: 9780061120084,
        editorial: "J.B. Lippincott & Co.",
        pubYear: new Date(1960, 6, 11),
        edition: 1,
        format: 'Paperback',
        language: "English",
        genre: ["Fiction", "Classic"],
        synopsis: "Harper Lee nos sumerge en el profundo Sur de Estados Unidos, donde la joven Scout Finch observa el racismo y la injusticia a través de los ojos de su padre, el abogado Atticus Finch. En un mundo dividido por el color de la piel y los prejuicios, este clásico explora temas como la empatía, la moral y la lucha por la justicia. A través de una narrativa sincera y poderosa, Lee nos recuerda la importancia de la compasión en medio de un sistema profundamente defectuoso.",
        keywords: ["racism", "justice", "South"],
        numPages: 281,
        location: "Shelf C2",
        price: 120,
        images: ["https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg"],
        description: "An American classic exploring racial injustice.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Juan Hernandez",
        state: "Jalisco",
        city: "Guadalajara",
        calif : 5
      }
    },
    {
      dataBook: {
        _id:4,
        title: "1984",
        author: ["George Orwell"],
        isbn: 9780451524935,
        editorial: "Secker & Warburg",
        pubYear: new Date(1949, 5, 8),
        edition: 1,
        format: 'Hardcover',
        language: "English",
        genre: ["Dystopian", "Political Fiction"],
        synopsis: "En un mundo sombrío donde el Estado vigila cada movimiento y controla cada pensamiento, Winston Smith lucha en silencio contra la opresión y la manipulación. George Orwell presenta una advertencia inquietante sobre los peligros del autoritarismo y la pérdida de libertad. Este clásico de la literatura distópica explora la mente humana bajo el control totalitario y la posibilidad de rebelión, convirtiéndose en una reflexión eterna sobre los límites de la libertad y el poder de la resistencia.",
        keywords: ["totalitarianism", "surveillance", "freedom"],
        numPages: 328,
        location: "Shelf A1",
        price: 170,
        images: ["https://m.media-amazon.com/images/I/91jHOlKEPwL.jpg"],
        description: "A classic warning against authoritarianism.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Ana Perez",
        state: "Nuevo Leon",
        city: "Monterrey",
        calif : 5
      }
    },
    {
      dataBook: {
        _id:5,
        title: "Brave New World",
        author: ["Aldous Huxley"],
        isbn: 9780060850524,
        editorial: "Chatto & Windus",
        pubYear: new Date(1932, 0, 1),
        edition: 1,
        format: 'Hardcover',
        language: "English",
        genre: ["Science Fiction", "Dystopian"],
        synopsis: "En un futuro donde la tecnología y la manipulación genética han moldeado una sociedad sin emociones profundas, Aldous Huxley nos muestra un mundo donde la felicidad es impuesta y el placer es moneda corriente. A través de la historia de Bernard Marx y su búsqueda de autenticidad, Huxley explora temas como el control social, la autonomía y el precio de una vida sin dolor ni sufrimiento. Este libro es una advertencia profética sobre una sociedad sin identidad, marcada por el conformismo y el control.",
        keywords: ["technology", "control", "happiness"],
        numPages: 311,
        location: "Shelf B2",
        price: 160,
        images: ["https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"],
        description: "A dystopian vision of the future dominated by pleasure.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Luis Martinez",
        state: "Chiapas",
        city: "Tuxtla Gutierrez",
        calif : 5
      }
    },
    {
      dataBook: {
        _id:6,
        title: "The Catcher in the Rye",
        author: ["J.D. Salinger"],
        isbn: 9780316769488,
        editorial: "Little, Brown and Company",
        pubYear: new Date(1951, 6, 16),
        edition: 1,
        format: 'Paperback',
        language: "English",
        genre: ["Fiction", "Coming-of-Age"],
        synopsis: "A través de los pensamientos y experiencias del joven Holden Caulfield, J.D. Salinger ofrece una visión íntima y reveladora de la adolescencia y el conflicto interno. Holden deambula por Nueva York, desilusionado por el mundo de los adultos, buscando sinceridad en una sociedad superficial. Este relato introspectivo captura el dolor, la confusión y la vulnerabilidad de la juventud, ofreciendo una reflexión profunda sobre la identidad, la alienación y la autenticidad.",
        keywords: ["youth", "identity", "rebellion"],
        numPages: 277,
        location: "Shelf C1",
        price: 110,
        images: ["https://m.media-amazon.com/images/I/91fQEUwFMyL._AC_UF1000,1000_QL80_.jpg"],
        description: "A classic tale of teenage alienation.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Carla Torres",
        state: "Michoacán",
        city: "Morelia",
        calif : 5
      }
    },
    {
      dataBook: {
        _id:7,
        title: "Pride and Prejudice",
        author: ["Jane Austen"],
        isbn: 9781503290563,
        editorial: "T. Egerton, Whitehall",
        pubYear: new Date(1813, 0, 28),
        edition: 1,
        format: 'Hardcover',
        language: "English",
        genre: ["Romance", "Classic"],
        synopsis: "En la Inglaterra de principios del siglo XIX, Jane Austen relata la historia de Elizabeth Bennet y su complicada relación con el aristocrático Sr. Darcy. A través de una prosa elegante y mordaz, Austen expone las normas sociales y las expectativas de la época, creando una comedia de costumbres que explora temas de clase, familia y amor. Este romance intemporal invita a los lectores a cuestionar las primeras impresiones y apreciar el valor de la sinceridad y el carácter.",
        keywords: ["romance", "society", "marriage"],
        numPages: 279,
        location: "Shelf D1",
        price: 130,
        images: ["c:\Users\krato\AppData\Local\Temp\MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg"],
        description: "A timeless romance in the English countryside.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Estela Ruiz",
        state: "Hidalgo",
        city: "Pachuca",
        calif : 5
      }
    },
    {
      dataBook: {
        _id:8,
        title: "The Great Gatsby",
        author: ["F. Scott Fitzgerald"],
        isbn: 9780743273565,
        editorial: "Charles Scribner's Sons",
        pubYear: new Date(1925, 3, 10),
        edition: 1,
        format: 'Paperback',
        language: "English",
        genre: ["Fiction", "Classic"],
        synopsis: "En el corazón de los años 20, F. Scott Fitzgerald nos presenta a Jay Gatsby, un hombre misterioso y millonario cuya vida gira en torno a un amor perdido y una ilusión de felicidad. A través de los ojos de Nick Carraway, observamos un mundo de riqueza y decadencia, donde los sueños se construyen sobre un terreno inestable. Esta obra maestra de la literatura explora el sueño americano y los límites de la ambición, cuestionando el precio de una vida dedicada al amor y el lujo.",
        keywords: ["wealth", "love", "American Dream"],
        numPages: 180,
        location: "Shelf E2",
        price: 140,
        images: ["https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"],
        description: "A reflection on the American dream.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Javier Castro",
        state: "Morelos",
        city: "Cuernavaca",
        calif : 5
      }
    },
    {
      dataBook: {
        _id:9,
        title: "Don Quijote de la Mancha",
        author: ["Miguel de Cervantes"],
        isbn: 9788491050168,
        editorial: "Francisco de Robles",
        pubYear: new Date(1605, 0, 16),
        edition: 1,
        format: 'Hardcover',
        language: "Spanish",
        genre: ["Adventure", "Classic"],
        synopsis: "La célebre obra de Miguel de Cervantes sigue las hazañas de un caballero demente y su fiel escudero, Sancho Panza. En su lucha por restaurar los valores de la caballería, Don Quijote se embarca en una serie de aventuras que mezclan humor, tragedia y filosofía. Este clásico de la literatura universal es una profunda reflexión sobre los ideales, la realidad y la locura, mientras celebra el poder de la imaginación y el espíritu humano en un mundo en constante cambio.",
        keywords: ["adventure", "chivalry", "humor"],
        numPages: 863,
        location: "Shelf F1",
        price: 250,
        images: ["https://www.plutonediciones.com/site/wp-content/uploads/2022/04/Don-Quijote.jpg"],
        description: "A masterpiece of Spanish literature.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Pablo Jimenez",
        state: "Oaxaca",
        city: "Oaxaca",
        calif : 5
      }
    },
    {
      dataBook: {
        _id:10,
        title: "Moby Dick",
        author: ["Herman Melville"],
        isbn: 9781503280786,
        editorial: "Harper & Brothers",
        pubYear: new Date(1851, 10, 14),
        edition: 1,
        format: 'Paperback',
        language: "English",
        genre: ["Adventure", "Classic"],
        synopsis: "En su búsqueda de la gran ballena blanca, el Capitán Ahab lleva a su tripulación a una travesía épica a través de los océanos. Herman Melville explora temas profundos como la obsesión, el destino y la naturaleza humana en un relato que desafía la supervivencia y la cordura. Esta novela es una poderosa metáfora de la lucha entre el hombre y las fuerzas incontrolables de la naturaleza, donde cada página revela el misterio y la majestuosidad del mar y la condición humana.",
        keywords: ["adventure", "sea", "obsession"],
        numPages: 635,
        location: "Shelf G1",
        price: 180,
        images: ["https://m.media-amazon.com/images/I/71K4OH9CqOL._UF894,1000_QL80_.jpg"],
        description: "A gripping tale of man vs. nature.",
        ownerId : "1",
        calif:5
      },
      user: {
        _id:1,
        credits : 0,
        name: "Miguel Ortiz",
        state: "Veracruz",
        city: "Veracruz",
        calif : 5
      }
    }
  ];

  constructor() { }

  getDummiBooks():Array<BookCard>{
    return this.dummiBooks
  }
}
