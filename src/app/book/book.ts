
export class Author{
    firstName:string;
    lastName:string;
}


export class Book{
    bookId: number;
    imageUrl:string;
    title:string;
    authors:Author[];
    category:string;
    publisher:string;
    noOfPages:number;
    edition:number;
    rating:number;
    price:number;
    releaseDate:Date;
}