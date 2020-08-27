import { Component, OnInit } from '@angular/core';
import { MyBooks } from '../../assets/data/myBooks';

@Component({
  selector: 'app-parsanav',
  templateUrl: './parsanav.component.html',
  styleUrls: ['./parsanav.component.css']
})
export class ParsanavComponent implements OnInit {
  mybooks = MyBooks;

  constructor() { }

  ngOnInit(): void {
  }

}
