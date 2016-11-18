import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TableService } from './table.service';
import {ResultsService} from './results.service';

@Component({
  selector: 'rt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TableService, ResultsService]
})
export class TableComponent implements OnInit {
  componentName: 'TableComponent';
  rows;
  rounds;
  constructor(private tableService: TableService, private resultsService: ResultsService) { }

  ngOnInit() {
    this.rounds = this.resultsService.rounds; // subscribe to entire collection
    this.resultsService.loadAll();    // load all results
  }
}
