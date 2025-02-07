import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filters-actions";

export const filterReduser = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_FILTER:
      if (state.includes(payload)) return state;
      return [...state, payload];
    case REMOVE_FILTER:
      return state.filter((elem) => elem !== payload);
    case CLEAR_FILTER:
      return [];
    default:
      return state;
  }
};
