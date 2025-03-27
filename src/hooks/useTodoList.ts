import { useReducer, useCallback } from "react";
import { Item } from "../types";

type State = {
  mainList: Item[];
  fruitList: Item[];
  vegetableList: Item[];
};

type Action =
  | { type: "MOVE_TO_COLUMN"; item: Item }
  | { type: "MOVE_BACK"; item: Item };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "MOVE_TO_COLUMN":
      return {
        ...state,
        mainList: state.mainList.filter((i) => i.name !== action.item.name),
        fruitList:
          action.item.type === "Fruit"
            ? [...state.fruitList, action.item]
            : state.fruitList,
        vegetableList:
          action.item.type === "Vegetable"
            ? [...state.vegetableList, action.item]
            : state.vegetableList,
      };
    case "MOVE_BACK":
      return {
        ...state,
        mainList: [...state.mainList, action.item],
        fruitList: state.fruitList.filter((i) => i.name !== action.item.name),
        vegetableList: state.vegetableList.filter(
          (i) => i.name !== action.item.name
        ),
      };
    default:
      return state;
  }
};

export function useTodoList(initialItems: Item[]) {
  const [state, dispatch] = useReducer(reducer, {
    mainList: initialItems,
    fruitList: [],
    vegetableList: [],
  });

  const moveToColumn = useCallback((item: Item) => {
    dispatch({ type: "MOVE_TO_COLUMN", item });
    setTimeout(() => dispatch({ type: "MOVE_BACK", item }), 5000);
  }, []);

  return {
    state,
    moveToColumn,
  };
}
