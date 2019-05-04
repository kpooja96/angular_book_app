import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    // selector:"book-details",
    templateUrl:"./book-details.component.html"
})
export class BookDetailsComponent implements OnInit{
    book:Book;
    constructor(private bookService:BookService,
        private route: ActivatedRoute){}

        ngOnInit() : void{
            this.route.paramMap.subscribe((map)=>{
                let bookId = +map.get("bookId");
                this.bookService.findBooksById(bookId).subscribe((data)=>{
                    this.book = data;
                })
            })
        }


}