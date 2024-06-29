import { useEffect, useState } from 'react';
import styles from './climate.module.scss';
import axios from 'axios';

export function Climate(){
    const [location, setLocation] = useState(false);
    const [wheater, setWheater] = useState(false);
    const [cidade, setCidade] = useState();
    
    useEffect( () => {

        navigator.geolocation.getCurrentPosition((position)=>{
            getWheater(position.coords.latitude, position.coords.longitude);
        });

    }, []);

    const getWheater = async (lat : any, long : any) =>{
        try{ 
            let res = await axios.get("https://api.openweathermap.org/data/2.5/weather",{
                params:{
                    lat: lat,
                    lon: long,
                    lang: 'pt_br',
                    units: 'metric',
                    appid: process.env.NEXT_PUBLIC_REACT_APP_OPEN_WHEATHER_KEY
                }
            });
            setLocation(true);
            setWheater(res.data);
        }catch(error){
            console.log("Erro na requisição do clima")
        }
    }
    
    const getWheaterCity = async( e : any) =>{
        e.preventDefault();
        try{ 
            let res = await axios.get("https://api.openweathermap.org/data/2.5/weather",{
                params:{
                    q: cidade,
                    lang: 'pt_br',
                    units: 'metric',
                    appid: '64ed82577ced7f69cb1687f0ce536131'
                }
            });
            setLocation(true);
            setWheater(res.data);
        }catch(error){
            console.log("Erro na requisição do clima")
        }
    }

    if(!(location)){
        return(
            <h2 className={styles.erroMsg}>Não foi possivel receber sua localização!</h2>
        )
    }else{ 
        let hora = new Date();
        let cidade = wheater['name'];
        let temp = (wheater['main']['temp']).toFixed(0);
        let tempo = "/images/iconsClima/"+ wheater['weather'][0]['description'];
        if(hora.getHours() > 18){
            tempo += "N.png";
        }else{
            tempo += "D.png";
        }
        
        return(
            <>
                <div className={styles.clima}>
                    <div className={styles.climaMain}>
                        <img src={tempo} />
                        <div>
                            <div className={styles.temperatura}>
                                <h1>
                                    {temp} 
                                </h1>
                                <h2 className={styles.medidas}>°C</h2>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.cidade}>
                        <h3>{cidade}</h3>
                        <form onSubmit={getWheaterCity}>
                            <input type="text" onChange={(e) => setCidade(e.target.value)}placeholder="Busque cidades"/>
                        </form>
                    </div>
                </div>
            </>
        ) 
    }
}