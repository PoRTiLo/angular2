export interface Round {
  name: string;
  date: string;
  matches: Match[];
}

export interface Match {
  startTime: string;
  team1: string;
  team2: string;
  result: string; 
  halfResult: string;
  place: Place;
}

export interface Place {
  name: string;
  street: string;
  city: string;
  url: string;
  gps: string;
}

export interface Table {
  teams: Team[];
}

export interface Team {
  name: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
  goals: number;
  points: number;
}