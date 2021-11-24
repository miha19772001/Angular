import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookPageService } from './book-page.service.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient, private bookPage: BookPageService) { }

 

  books = new Map([
    
    //Keys are id from books.json
    [1, "Ottsy_i_deti.json"],
    [2, "Palata_No_6.json"],
  ]);

  getId() {

    const path = document.location.pathname.split('/');
    const bookPageId = Number(path[2]);

    return  bookPageId;
  };

  getContent() {
    return this.http.get(`assets/books/${this.books.get(this.getId())}`);
  }
}
