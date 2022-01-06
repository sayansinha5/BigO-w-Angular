import { Component, OnInit } from '@angular/core';
import { SortingAlgo } from '../shared/sortingalgo';
import { SortingalgolistService } from '../services/sortingalgolist.service';
import { DataStructure } from '../shared/datastructure';
import { DatastructurelistService } from '../services/datastructurelist.service';

@Component({
  selector: 'app-bigocheatsheet',
  templateUrl: './bigocheatsheet.component.html',
  styleUrls: ['./bigocheatsheet.component.scss']
})
export class BigocheatsheetComponent implements OnInit {

  sortingAlgoList: SortingAlgo[];
  dataStructureList: DataStructure[];
  
  selectedSortAlgo: SortingAlgo = { name: '', sc_worst: '', tc_best: '', tc_average: '', tc_worst: '', slug: '' };
  selectedDataStructure: DataStructure = { name: '', ac_search: '', ac_insert: '', ac_delete: '', wc_search: '', wc_insert: '', wc_delete: '', slug: '' };

  constructor(private sortingAlgoListService: SortingalgolistService, private dataStructureService: DatastructurelistService) { }

  ngOnInit() {
    this.sortingAlgoList = this.sortingAlgoListService.getSortAlgoList();
    this.dataStructureList = this.dataStructureService.getDataStructureList();
  }

  onSelectSortAlgo(sortAlgo: SortingAlgo) {
    this.selectedSortAlgo = sortAlgo;
  }

  onSelectDataStructure(dataStructure: DataStructure) {
    this.selectedDataStructure = dataStructure;
  }
}
