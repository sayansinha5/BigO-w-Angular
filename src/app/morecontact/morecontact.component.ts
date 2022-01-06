import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morecontact',
  templateUrl: './morecontact.component.html',
  styleUrls: ['./morecontact.component.scss']
})
export class MorecontactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getValues(val) {
    console.log(val);
  }

}
