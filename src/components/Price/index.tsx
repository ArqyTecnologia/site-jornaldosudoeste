import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "./price.module.scss";
import axios from "axios";

export function Price(){
    const [res, setRes] = useState();
    const [load, setLoading] = useState(false);
    let dolar, dolarStats;
    let euro, euroStats;
    
    const receberDados = async () =>{
        let dados = await axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL");
        setRes(dados.data);
        setLoading(true);
    }
    useEffect(() =>{
        receberDados();
    }, [])
    
    if(load){
        dolar = ((Number(res["USDBRL"].ask) + Number(res["USDBRL"].bid)) / 2).toFixed(2).replace('.',',');
        euro = ((Number(res["EURBRL"].ask) + Number(res["EURBRL"].bid)) / 2).toFixed(2).replace('.',',');
        if(res['EURBRL'].pctChange > 0){
            euroStats = "/images/SetaVerde.png";
        }else{
            euroStats = "/images/SetaVermelha.png"
        }
        if(res['USDBRL'].pctChange > 0){
            dolarStats = "/images/SetaVerde.png";
        }else{
            dolarStats = "/images/SetaVermelha.png"
        }
    }
    
    return(
        <div className="flex items-center justify-center">
            <div className="flex items-center px-2 ">
                <h1>Dólar: </h1>
                <img src={dolarStats} width="20" height="20" alt="indicador positivo verde"/>
                <h2>{dolar}</h2>
            </div>
            <div className="flex items-center">
                <h1> Euro: </h1>
                <img src={euroStats} width="20" height="20" alt="indicador positivo verde"/>
                <h2> {euro}</h2>
            </div>
        </div>
    )
}