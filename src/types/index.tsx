// src/types/index.tsx

export interface StoreState {
  playerID: string;
}

export interface PlayerType {
  ID: string;
  Name: string;
  Rating: string;
  Price: string;
  SkillsMoves: string;
  WeakFoot: string;
  Pace: string;
  Shooting: string;
  Passing: string;
  Dribbling: string;
  Defending: string;
  Phyiscality: string;
  Popularity: string;
  BaseStats: string;
  InGameStats: string;
  Revision: string;
  Position: string;
  WorkRate: string;
  Height: string;
  Club: string;
  Country: string;
  League: string;
  NationPic: string;
  ClubPic: string;
  PlayerPic: string;
}

export interface MenuItemType {
  link: string;
  name: string;
}

export interface DescriptionItemType {
  link: string;
  hoverText: string;
  text: string;
}
