import {createReducer, on} from "@ngrx/store";
import {addItem, deleteItem} from "./items.actions";

const initialState = [
  { id: 1 , name: "Pane1"},
  { id: 2 , name: "Nutella2"},
  { id: 3 , name: "Latte3"},
]

export const itemReducer = createReducer(
  initialState,
  on(addItem, (state, action) => [...state, action.item]),
  on(deleteItem, (state, action) => state.filter(item => item.id!= action.id)),
)
