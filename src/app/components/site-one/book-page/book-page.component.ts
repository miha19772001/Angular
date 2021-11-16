import { Component, OnInit } from '@angular/core';
import { BookPageService } from 'src/app/services/book-page.service.service';
import { IBook } from 'src/app/Interfaces/IBook';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
  providers: [BookPageService],
})
export class BookPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
