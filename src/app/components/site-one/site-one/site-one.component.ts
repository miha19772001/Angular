import { Component, OnInit } from '@angular/core';
import { BookPageService } from 'src/app/services/oneSite/book-page.service.service';

@Component({
  selector: 'app-site-one',
  templateUrl: './site-one.component.html',
  styleUrls: ['./site-one.component.scss'],
  providers: [BookPageService],
})
export class SiteOneComponent implements OnInit {

  constructor(private bookPage: BookPageService) { }

  books: any = [];
  
  ngOnInit() {
    this.bookPage.getBooks()
      .subscribe(
        (data: any) => { this.books = data.books; }
      );
  };
}

