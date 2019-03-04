import * as constants from "../constants";

export interface SetPlayerid {
  playerID: String;
  type: constants.SET_PLAYERID;
}

export type playerActions = SetPlayerid;

export function setPlayerid(playerID: String): SetPlayerid {
  return {
    playerID,
    type: constants.SET_PLAYERID
  };
}
