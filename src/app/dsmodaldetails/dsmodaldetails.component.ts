import { Component, OnInit, Input } from '@angular/core';
import { DataStructure } from '../shared/datastructure';

@Component({
  selector: 'app-dsmodaldetails',
  templateUrl: './dsmodaldetails.component.html',
  styleUrls: ['./dsmodaldetails.component.scss']
})
export class DsmodaldetailsComponent implements OnInit {

  @Input()
  dataStructure: DataStructure;

  constructor() { }

  ngOnInit() {
  }

}
