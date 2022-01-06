import { Injectable } from '@angular/core';
import { SortingAlgo } from '../shared/sortingalgo';
import { SORTINGALGOLIST } from '../shared/sortingalgolist';

@Injectable({
  providedIn: 'root'
})
export class SortingalgolistService {

  constructor() { }

  getSortAlgo(slug: string): SortingAlgo {
    return SORTINGALGOLIST.filter((sortingalgo) => sortingalgo.slug == slug)[0];
  }

  getSortAlgoList(): SortingAlgo[] {
    return SORTINGALGOLIST;
  }
}
