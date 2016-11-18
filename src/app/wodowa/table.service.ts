import { Injectable } from '@angular/core';

export interface Team {

}

@Injectable()
export class TableService {

  constructor() { }

  getTeam() {
    return [{row: 1}, {row: 2}];
  }
}
