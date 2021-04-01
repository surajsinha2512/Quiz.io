import React,{useState,useEffect} from 'react';
import axios from 'axios';
import HomeScreen from './Home';
import './style.css';

const Country=(props)=>{
const [data,setData]=useState(props.data);
const [details,setDetails]=useState([]);
const [weather,showWeather]=useState(false);

useEffect(()=>{
let url=`https://restcountries.eu/rest/v2/name/${data}`;
axios.get(url).then((r)=>{
    return r.data;
}).then((r)=>{
   setDetails(state=>[...state,...r])
})

},[])

const clickHandler=()=>{
    showWeather(true)
}

    return (
        <>
        <div className="container round">
       {details.map((value)=>{
           return (
               <>
               <div className="country">
               <div className="col"> 
               <div className="row"> Capital : {value.capital}</div>
               <div className="row">population : {value.population}</div>
               <div className="row">Latlng : {value.latlng}</div>
               </div>
               <div className="col">
               <img src={value.flag} style={{height:"20%",width:"30%"}}/> 
               <button className="btn btn-success m-5" onClick={clickHandler} > Capital Weather </button>
               </div>
               </div>
               </>
           )
       })}
      
        </div>
        {weather? <HomeScreen country={props.data}/> :null}
        </>
    )
}

export default Country;