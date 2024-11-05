export interface Book {
  // Datos importantes del libro ()
  title:string,
  author : string[],
  isbn : number,
  editorial : string,
  pubYear : Date,
  edition : number,
  format : "Hardcover" | "Paperback",
  language : string,
  // Contenido del libro
  genre : string[],
  synopsis : string,
  keywords : string[]
  numPages : number,
  // Extra
  location : string,
  price : number
  images : string[],
  description : string
  // Relacion
  ownerId : string
  calif : 0 | 1 | 2 | 3 | 4 | 5
}
