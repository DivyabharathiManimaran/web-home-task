export interface PlayerInfo{
    "id": string,
    "active": string,
    "profile-id": string
  }

  export interface PlayerDetails {
    "id": string,
    "profile": Profile,
    "stats": Stats
  }

  export interface Profile {
    "age": string,
    "role": string,
    "team": string,
    "picture": string
  }

  export interface Stats {
    "blocks" :string,
    "totalTackles" : string,
    "interceptions" : string,
    "tacklesWon" : string,
    "yellowCards" : string,
    "passingAccuracy" : string,
    "clearances" : string,
    "totalCrosses" : string,
    "aerialDuelsWon" : string,
    "minutesPlayed" : string,
    "minutesPerGoal" : string,
    "headedGoals" : string,
    "foulsConceded" : string,
    "totalPasses" : string,
    "totalShots" : string,
    "otherGoals" : string,
    "duelsWon" : string,
    "shotsOnTarget" :string,
    "leftFootGoals" : string,
    "rightFootGoals" : string,
    "starts" : string,
    "goalsFromInsideBox" :string,
    "substitutionOff" : string
    "foulsWon" : string,
    "assists" : string,
    "gamesPlayed" : string,
    "substitutionOn" : string,
    "redCards" : string,
    "goals" : string,
    "successfulCrosses" : string,
    "goalsFromOutsideBox" :string
  }