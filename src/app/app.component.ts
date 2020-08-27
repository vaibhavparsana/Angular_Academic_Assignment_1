import { Component } from '@angular/core';
import { Parsanav } from "./parsanav"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parsanavA3';
  bio:Parsanav ={
    sid:991548013,
    sname:"Vaibhav Parsana",
    scampus:"Trafalgar",
    slogin:"parsanav",
    stitle:"Assignment#3"
};
}

