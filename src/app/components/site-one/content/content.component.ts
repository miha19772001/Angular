import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/oneSite/content.service';
import { BookPageService } from 'src/app/services/oneSite/book-page.service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private content: ContentService, private bookPage: BookPageService) { }

  chapter: any = [];

  book: any = {};

  isInChapter: boolean = true;

  getId() {
    const path = document.location.pathname.split('/');
    //const bookPageId =  Number(path[2]);
    //const contentId = Number(path[4]);

    const bookPageId =  Number(path[2]) - 1;
    const contentId = Number(path[4]) - 1;

    return { bookPageId, contentId}
  };

  ngOnInit(): void {
    this.content.getContent()
      .subscribe(
        (data: any) => {
         
          //Получаем контент из URL
          this.chapter = data.content[this.getId().contentId]
        
          //console.log(this.chapter.addition)

          //Проверяем наличие в свойства addition в главе
          this.isInChapter =  Boolean(this.chapter.addition)
        }
      );

    this.bookPage.getBooks()
      .subscribe(
        (data: any) => {

          //Получаем книгу из URL
          this.book = data.books[this.getId().bookPageId];

          console.log(this.book)
        }
      );
  }

}
