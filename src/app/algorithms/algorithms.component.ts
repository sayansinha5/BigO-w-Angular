import { Component, OnInit } from '@angular/core';
import { SortingAlgo } from '../shared/sortingalgo';
import { SortingalgolistService } from '../services/sortingalgolist.service';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent implements OnInit {

  sortingAlgoList: SortingAlgo[];
  
  constructor(private sortingAlgoListService: SortingalgolistService) { }

  ngOnInit() {
    this.sortingAlgoList = this.sortingAlgoListService.getSortAlgoList();
  }

}
