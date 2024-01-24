import { useContext, useEffect, useState } from "react";
import { mainContext } from "../../context/mainProvider";

const WeatherCard = () => {
    const {datas} = useContext(mainContext)
    const {city, setCity} = useContext(mainContext)
    const [data, setData] = useState(null)

    useEffect(()=>{
        setData(datas)
    }, [datas])

console.log(data);
    console.log(datas);
    return ( 
<>
        {data ? (

        <>
        <div>
        <button onClick={()=>setCity("Hamburg")}>Hamburg</button>
        <button onClick={()=>setCity("Berlin")}>Berlin</button>
        <button onClick={()=>setCity("Köln")}>Köln</button>
        <button onClick={()=>setCity("Australien")}>Australien</button>
        </div>
        {data.weather && data.weather.length > 0 && ( <h2>{data.weather[0].description}</h2>)}
        {data.weather && data.weather.length > 0 && ( <img src={`http://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@2x.png`}/>)}
        <h3>Aktuell: {datas.main?.temp}°C</h3>
        {data.weather && data.weather.length > 0 && ( <h2>Windgeschwindigkeit: {data.wind.speed} m/s</h2>)}
        
        </>):(
        <h3></h3>
    )}
        
    

        </>
        
     );
}
 
export default WeatherCard;