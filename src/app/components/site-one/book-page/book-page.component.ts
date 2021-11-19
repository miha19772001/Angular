import { Component, OnInit } from '@angular/core';
import { BookPageService } from 'src/app/services/book-page.service.service';
import { IBook } from 'src/assets/Interfaces/IBook';


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
  providers: [BookPageService],
})
export class BookPageComponent implements OnInit {

  constructor(private bookPage: BookPageService) { }

  books: any = [];

  id = this.getId();

  book: any = {};

  getId() {
    let path = document.location.pathname;
    let id = path.replace(/[^0-9]/g, '');
    return Number(id) - 1;
  };


  ngOnInit(): void {
    this.bookPage.getBooks()
      .subscribe(
        (data: any) => {
          this.books = data.books;

          this.book = this.books[this.getId()];
        }
      );
  }
}
