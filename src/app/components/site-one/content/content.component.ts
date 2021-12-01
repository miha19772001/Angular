import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/oneSite/content.service';
import { BookPageService } from 'src/app/services/oneSite/book-page.service.service';
import { IBook } from 'src/assets/Interfaces/IBook';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private content: ContentService, private bookPage: BookPageService) { }

  chapter: any = [];

  book!: IBook;

  nextChapter: string = '';
  previousChapter: string = '';
  nameOfParagrath: string = '';
  nameOfBook: string = '';

  isInChapter: boolean = true;

  nextPage: string = `bookPage/${this.getId().bookPageId + 1}/content/${this.getId().contentId + 2}`;
  previousPage: string = `bookPage/${this.getId().bookPageId + 1}/content/${this.getId().contentId}`;

  // invisibaleLink: any = '';

  makeInvisibaleFirstLink() {
    return this.getId().contentId + 1 == 1 ? false : true;
  }

  makeInvisibaleLastLink() {
    return this.getId().contentId + 1 == this.book.content.length ? false : true;
  }


  getId() {
    const path = document.location.pathname.split('/');

    const bookPageId = Number(path[2]) - 1;
    const contentId = Number(path[4]) - 1;

    return { bookPageId, contentId }
  };

  ngOnInit(): void {
    this.content.getContent()
      .subscribe(
        (data: any) => {

          //Получаем контент из URL
          this.chapter = data.content[this.getId().contentId]

          //Проверяем наличие в свойства addition в главе
          this.isInChapter = Boolean(this.chapter.addition)
        }
      );

    this.bookPage.getBooks()
      .subscribe(
        (data: any) => {

          //Получаем книгу из URL
          this.book = data.books[this.getId().bookPageId];

          //Получение имени главыу
          this.nameOfParagrath = this.book.content[this.getId().contentId]

          //Получаем имя книги
          this.nameOfBook = this.book.name;

          //Переход на следующую станицу
          this.nextChapter = this.book.content[this.getId().contentId + 1];

          //Переод на предыдущую страницу
          this.previousChapter = this.book.content[this.getId().contentId - 1];
          console.log(this.makeInvisibaleLastLink())
        }
      );
  }

}
