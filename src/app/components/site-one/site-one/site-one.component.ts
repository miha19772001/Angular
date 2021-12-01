import { Component, OnInit } from '@angular/core';
import { BookPageService } from 'src/app/services/oneSite/book-page.service.service';
import { IBook } from 'src/assets/Interfaces/IBook';

@Component({
  selector: 'app-site-one',
  templateUrl: './site-one.component.html',
  styleUrls: ['./site-one.component.scss'],
  providers: [BookPageService],
})
export class SiteOneComponent implements OnInit {

  constructor(private bookPage: BookPageService) { }

  books: IBook[] = [];

  ngOnInit() {

    this.bookPage.getBooks()
      .subscribe(
        (data: any) => { this.books = data.books; }
      );
  };
}

