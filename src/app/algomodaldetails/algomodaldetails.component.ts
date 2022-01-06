import { Component, OnInit, Input } from '@angular/core';
import { SortingAlgo } from '../shared/sortingalgo';

@Component({
  selector: 'app-algomodaldetails',
  templateUrl: './algomodaldetails.component.html',
  styleUrls: ['./algomodaldetails.component.scss']
})
export class AlgomodaldetailsComponent implements OnInit {

  
  @Input()
  sortAlgo: SortingAlgo;

  constructor() { }

  ngOnInit() {
  }

}
