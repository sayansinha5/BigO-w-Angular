import { Component, OnInit } from '@angular/core';
import { DataStructure } from '../shared/datastructure';
import { DatastructurelistService } from '../services/datastructurelist.service';

@Component({
  selector: 'app-datastructures',
  templateUrl: './datastructures.component.html',
  styleUrls: ['./datastructures.component.scss']
})
export class DatastructuresComponent implements OnInit {

  dataStructureList: DataStructure[];

  constructor( private dataStructureService: DatastructurelistService) { }

  ngOnInit() {
    this.dataStructureList = this.dataStructureService.getDataStructureList();
  }

}
