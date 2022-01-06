import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SortingAlgo } from '../shared/sortingalgo';
import { SortingalgolistService } from '../services/sortingalgolist.service';

@Component({
  selector: 'app-algorithmdetails',
  templateUrl: './algorithmdetails.component.html',
  styleUrls: ['./algorithmdetails.component.scss']
})
export class AlgorithmdetailsComponent implements OnInit {

  sortingAlgorithm: SortingAlgo;

  constructor(
    private sortingAlgoListService: SortingalgolistService, 
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let slug = this.route.snapshot.params['slug'];
    this.sortingAlgorithm = this.sortingAlgoListService.getSortAlgo(slug);
  }

  goBack(): void {
    this.location.back();
  }

}
