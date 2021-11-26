import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookPageService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get('assets/books/books.json');
  }
}
