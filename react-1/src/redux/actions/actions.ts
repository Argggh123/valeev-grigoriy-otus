import { ActionTypes } from "./actionTypes";

export function changeFavorite(id: number) {
  return {
    type: ActionTypes.FAV,
    payload: id,
  }
}

export function changeCity(id: any) {
  return {
    type: ActionTypes.CHANGE_CITY,
    payload: id,
  }
}
