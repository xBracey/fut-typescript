// src/reducers/index.tsx

import { playerActions } from "../actions";
import { StoreState } from "../types/index";
import { SET_PLAYERID } from "../constants/index";

export function player(state: StoreState, action: playerActions): StoreState {
  if (action.type === SET_PLAYERID) {
    return { ...state, playerID: action.playerID };
  }
  return state;
}
