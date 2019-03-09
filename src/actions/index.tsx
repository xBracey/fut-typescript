import * as constants from "../constants";

export interface SetPlayerid {
  playerID: string;
  type: constants.SET_PLAYERID;
}

export type playerActions = SetPlayerid;

export function setPlayerid(playerID: string): SetPlayerid {
  return {
    playerID,
    type: constants.SET_PLAYERID
  };
}
