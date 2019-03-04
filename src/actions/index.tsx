import * as constants from "../constants";

export interface SetPlayerid {
  playerID: number;
  type: constants.SET_PLAYERID;
}

export type playerActions = SetPlayerid;

export function setPlayerid(playerID: number): SetPlayerid {
  return {
    playerID,
    type: constants.SET_PLAYERID
  };
}
