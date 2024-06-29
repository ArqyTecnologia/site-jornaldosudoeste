import { useState, useEffect } from "react";
import styles from "../DigitalWeekly/digitalSemana.module.scss";

export default function Teste() {
    const [dados, setDados] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('/api/controller/buscarBanco/', {
            method: 'POST',
            body: JSON.stringify({ 'busca': 'edicoes_quinzenais' }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            setDados(data.reverse());
            setLoad(true);
        });
    }, []);

    if (load)
        return (
            <>
                <div className={styles.headerDigitalSemanal}>
                    <a href="/digitalWeekly">
                        <h1>Digital Quinzenal</h1>
                    </a>
                </div>
                <div className={styles.mainDigitalSemanal}>
                    

                    { dados.map((dado, key)=>(
                        key < 5 ?
                        <a href={`/digitalWeekly/quinzenal/${dado.titulo}`} className={styles.cards} key={key}>
                            <div>
                                <img src={`data:image;base64, ${Buffer.from(dado.imagem.data).toString('base64')}`} alt="" className="absolute brightness-[60%] w-full h-full z-index-0 top-0"/>
                                <h1 className="relative"> JS NOTÍCIAS </h1>
                                <h2 className="relative"> { dado.titulo }</h2>
                            </div>
                        </a>
                        : null
                    ))}

                </div>
            </>
        );
}