import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  year:number = 2020;

  ngOnInit(): void {
    this.updateYear();
  }
  updateYear() {
    var date = new Date();
    this.year = date.getFullYear();
    console.log('[Log] -> Set Year: ', date.getFullYear());
  }

}
