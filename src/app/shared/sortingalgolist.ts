import { SortingAlgo } from "./sortingalgo";

export const SORTINGALGOLIST: SortingAlgo[] = [
    { 
      name: 'Insertion Sort',
      sc_worst: 'O(1)',
      tc_best: 'O(n)',
      tc_average: 'O(n2)',
      tc_worst: 'O(n2)',
      slug: 'insertion-sort' 
    },
    { 
      name: 'Selection Sort',
      sc_worst: 'O(1)',
      tc_best: 'O(n2)',
      tc_average: 'O(n2)',
      tc_worst: 'O(n2)',
      slug: 'selection-sort' 
    },
    {
      name: 'Bubble Sort',
      sc_worst: 'O(1)',
      tc_best: 'O(n)',
      tc_average: 'O(n2)',
      tc_worst: 'O(n2)',
      slug: 'bubble-sort'
    },
    {
      name: 'Shell Sort',
      sc_worst: 'O(1)',
      tc_best: 'O(n)',
      tc_average: 'O(n log n2)',
      tc_worst: 'O(n log n2)',
      slug: 'shell-sort'
    },
    {
      name: 'Merge Sort',
      sc_worst: 'O(n)',
      tc_best: 'O(n)',
      tc_average: 'O(n log n)',
      tc_worst: 'O(n log n)',
      slug: 'merge-sort'
    },
    {
      name: 'Quick Sort',
      sc_worst: 'O(log n)',
      tc_best: 'O(n)',
      tc_average: 'O(n log n)',
      tc_worst: 'O(n log n)',
      slug: 'quick-sort'
    },
    {
      name: 'Heap Sort',
      sc_worst: 'O(1)',
      tc_best: 'O(n)',
      tc_average: 'O(n log n)',
      tc_worst: 'O(n log n)',
      slug: 'heap-sort'
    }
  ];