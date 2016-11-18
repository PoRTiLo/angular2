import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Round } from '.././shared/types.d';


@Injectable()
export class ResultsService {

  public rounds: Observable<Round[]>;

  private resultsUrl = './data/results.json';  // URL to web API
  private _rounds: BehaviorSubject<Round[]>;
  private dataStore: {  // This is where we will store our data in memory
    rounds: Round[]
  };

// Using Angular DI we use the HTTP service
  constructor(private http: Http) {
    this.dataStore = { rounds: [] };
    this._rounds = <BehaviorSubject<Round[]>>new BehaviorSubject([]);
    this.rounds = this._rounds.asObservable();
  }

  loadAll() {
    this.http.get(this.resultsUrl).map(response => response.json()).subscribe(data => {
      this.dataStore.rounds = data.rounds;
      console.log(this.dataStore.rounds);
      this._rounds.next(Object.assign({}, this.dataStore).rounds);
    }, error => console.log('Could not load todos.'));
  }
}
