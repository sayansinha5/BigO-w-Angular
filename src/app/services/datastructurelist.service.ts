import { Injectable } from '@angular/core';
import { DataStructure } from '../shared/datastructure';
import { DATASTRUCTURELIST } from '../shared/datastructurelist';

@Injectable({
  providedIn: 'root'
})
export class DatastructurelistService {

  constructor() { }

  getDataStructure(slug: string): DataStructure {
    return DATASTRUCTURELIST.filter((datastructure) => datastructure.slug == slug)[0];
  }

  getDataStructureList(): DataStructure[] {
    return DATASTRUCTURELIST;
  }
}
