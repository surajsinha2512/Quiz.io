import axios from "axios";
import { REQUEST, SUCCESS, FAIL } from "./Constants";

export const Actions = (props) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST });
    let url = `http://api.weatherstack.com/current?access_key=922be7ef63a20dd3876bf9a7d8b4e1e5&query=${props.country}`;
    const response = await axios.get(url);
    const offer = response.data.current;
    dispatch({
      type: SUCCESS,
      payload: offer,
    });
  } catch (err) {
    dispatch({
      type: FAIL,
      payload: err.message,
    });
  }
};
