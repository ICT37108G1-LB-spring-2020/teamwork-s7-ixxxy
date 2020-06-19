import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

    books = [];
    wigni;
    img:string;
    autor:string;
    details: details;

  constructor() { }

  ngOnInit(): void {
    this.books = [
       {name: 'Angular', img: 'https://m.media-amazon.com/images/I/51OucWzOf9L.jpg', info: "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს"},
       {name:"JavaScript", img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e9617d19293361.562d7f22ac57d.gif', info: "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს"},
       {name:"Node js", img: 'https://www.nodejsdesignpatterns.com/img/book-cover-nodejs-design-patterns.jpg', info: "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს"}
    ]

    this.wigni = [
       {name: '', img: ''}
    ]
  }

  chooseOpt(option) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i] == option ) {
        this.wigni = this.books[i];
        break;
      }
    }
  }


  addname(name, img) {
   var arr={name: (name), img: (img)};
   this.books.unshift(arr);
   //this.books.push(arr);
   return false;
  }

  deleteOpt(option) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i] == option ) {
        this.books.splice(i, 1);
        break;
      }
    }
  }



}









interface details {
    price: number,
    year: number,
    sale: number
}
