import { REQUEST, SUCCESS, FAIL } from "./Constants";

export const Reducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case REQUEST:
      return { loading: true, products: [] };
    case SUCCESS:
      return { loading: false, products: action.payload };
    case FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
