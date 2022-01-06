import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataStructure } from '../shared/datastructure';
import { DatastructurelistService } from '../services/datastructurelist.service';

@Component({
  selector: 'app-datastructuredetails',
  templateUrl: './datastructuredetails.component.html',
  styleUrls: ['./datastructuredetails.component.scss']
})
export class DatastructuredetailsComponent implements OnInit {

  dataStructure: DataStructure;

  constructor(
    private dataStructureListService: DatastructurelistService, 
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let slug = this.route.snapshot.params['slug'];
    this.dataStructure = this.dataStructureListService.getDataStructure(slug);
  }

  goBack(): void {
    this.location.back();
  }

}
