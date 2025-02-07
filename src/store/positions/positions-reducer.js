import { ADD_POSITION } from "./positions-actions";

export const positionsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_POSITION:
      return payload;

    default:
      return state;
  }
};
