import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../Redux/Actions";
import Loader from "./Loader";
import "./style.css";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.Reducer);
  const { loading, products } = dataList;
  useEffect(() => {
    dispatch(Actions(props));
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container weather" style={{width:"30%"}}>
        <img src={products.weather_icons} style={{height:"10%",width:"10%"}} className="img"/> 
          <div className="col m-10">{`temperature : ${products.temperature}`}</div>
          <div className="col m-10">{`Wind Speed : ${products.wind_speed}`}</div>
          <div className="col m-10">{`Precipitation : ${products.precip}`}</div>
        </div>
      )}
    </>
  );
};
export default HomeScreen;
