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
    sid:0,
    sname:"Name",
    scampus:"Campus",
    slogin:"LoginID",
    stitle:"Assignment#3"
};
}

