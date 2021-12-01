import { Component } from '@angular/core';
import { BookPageService } from 'src/app/services/oneSite/book-page.service.service';
@Component({
  selector: 'site-one-header',
  templateUrl: './site-one-header.component.html',
  styleUrls: ['./site-one-header.component.scss']
})
export class SiteOneHeaderComponent {

  logo: string = '';

  nameBook: string = '';

  values = '';

  constructor(private bookPage: BookPageService) {

    this.resize_info()
    window.onresize = () => { this.resize_info(); };
  }
  resize_info() {

    innerWidth < 321 ? this.logo = 'ML' : this.logo = 'My Library';
  }

  seekBook() {
    this.bookPage.getBooks()
      .subscribe(
        (data: any) => {
          for (let index = 0; index < data.books.length; index++) {
            if (data.books[index].name === this.nameBook[0].toUpperCase() + this.nameBook.slice(1)) {
              document.location.pathname = `/bookPage/${index + 1}`;
              break;
            }
          }
        }
      )
  }

  onEnter() {
    this.seekBook();
  }
}
