import { useEffect, useState } from 'react';
import styles from './digitalSemana.module.scss';


export default function DigitalWeekly(){
    const [dados, setDados] = useState([]);
    const [load, setLoad] = useState(false);
    
    useEffect(() =>{
        fetch('/api/controller/buscarBanco/',{
            method: 'POST',
            body: JSON.stringify({'busca': 'edicoes_semanais'}), 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            setDados(data);
            setLoad(true);
        });
    }, []);
    
    if(load){
        return(
            <>  
                <div className={styles.headerDigitalSemanal}>
                    <a href="/digitalWeekly">
                        <h1>JS Notícias</h1>
                    </a>
                </div>
                <div className={styles.mainDigitalSemanal}>
                    
                    <a href={`/digitalWeekly/${dados[dados.length - 1].titulo}`} className={styles.cards}>
                        <div>
                            <img src={`data:image;base64, ${Buffer.from(dados[dados.length -1].imagem.data).toString('base64')}`} alt="" className="absolute brightness-[60%] w-full h-full z-index-0 top-0"/>
                            <h1 className="relative"> JS NOTÍCIAS </h1>
                            <h2 className="relative"> { dados[dados.length - 1 ].titulo }</h2>
                        </div>
                    </a>

                    <a href={`/digitalWeekly/${dados[dados.length - 2].titulo}`} className={styles.cards}>
                        <div>
                            <img src={`data:image;base64, ${Buffer.from(dados[dados.length -2].imagem.data).toString('base64')}`} alt="" className="absolute brightness-[60%] w-full h-full z-index-0 top-0"/>
                            <h1 className="relative"> JS NOTÍCIAS </h1>
                            <h2 className="relative"> { dados[dados.length - 2 ].titulo }</h2>
                        </div>
                    </a>

                    <a href={`/digitalWeekly/${dados[dados.length - 3].titulo}`} className={styles.cards}>
                        <div>
                            <img src={`data:image;base64, ${Buffer.from(dados[dados.length -3].imagem.data).toString('base64')}`} alt="" className="absolute brightness-[60%] w-full h-full z-index-0 top-0"/>
                            <h1 className="relative"> JS NOTÍCIAS </h1>
                            <h2 className="relative"> { dados[dados.length - 3 ].titulo }</h2>
                        </div>
                    </a>

                    <a href={`/digitalWeekly/${dados[dados.length - 4].titulo}`} className={styles.cards}>
                        <div>
                            <img src={`data:image;base64, ${Buffer.from(dados[dados.length -4].imagem.data).toString('base64')}`} alt="" className="absolute brightness-[60%] w-full h-full z-index-0 top-0"/>
                            <h1 className="relative"> JS NOTÍCIAS </h1>
                            <h2 className="relative"> { dados[dados.length - 4 ].titulo }</h2>
                        </div>
                    </a>
                    <a href={`/digitalWeekly/${dados[dados.length - 5].titulo}`} className={styles.cards}>
                        <div>
                            <img src={`data:image;base64, ${Buffer.from(dados[dados.length -5].imagem.data).toString('base64')}`} alt="" className="absolute brightness-[60%] w-full h-full z-index-0 top-0"/>
                            <h1 className="relative"> JS NOTÍCIAS </h1>
                            <h2 className="relative"> { dados[dados.length - 5 ].titulo }</h2>
                        </div>
                    </a>
                </div>
            </>
        );
    }
    else{
        return(
            <>
                <div className={styles.headerDigitalSemanal}>
                    <h1> JS Notícias</h1>
                </div>
                <div className={styles.mainDigitalSemanal}>
                    <div className={styles.cards}>
                        <h1> JS NOTÍCIAS</h1>
                        <h2> Titulo </h2>
                    </div>
                    <div className={styles.cards}>
                        <h1> JS NOTÍCIAS</h1>
                        <h2> Titulo </h2>
                    </div>
                    <div className={styles.cards}>
                        <h1> JS NOTÍCIAS</h1>
                        <h2> Titulo </h2>
                    </div>
                    <div className={styles.cards}>
                        <h1> JS NOTÍCIAS</h1>
                        <h2> Titulo </h2>
                    </div>
                    <div className={styles.cards}>
                        <h1> JS NOTÍCIAS</h1>
                        <h2> Titulo </h2>
                    </div>
                </div>
            </>
        );
    }
    
}