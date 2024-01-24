import axios from "axios";
import { createContext, useEffect, useState } from "react";
import WeatherCard from "../component/weatherCrad/WeatherCard";


export const mainContext = createContext()

const mainProvider = ({children}) => {

    const [datas, setDatas]= useState([])
    const [city, setCity] =useState("Globe")

useEffect(()=>{
    const apiFetch = async () => {
        const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bcea2e105b56117dc4f5cdd3a2391fd&units=metric&lang=de`)
        setDatas(resp.data)
        console.log(resp.data);
        
    }
    apiFetch()
},[city])




    return ( 
        <>
        <mainContext.Provider value={{datas, setDatas, city, setCity}}>
            {children}
        </mainContext.Provider>
       
        </>
     );
}
 
export default mainProvider;