import { useEffect, useState } from "react";
import styles from "./seeToo.module.scss";

export default function SeeToo() {
    const [dados, setDados] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('/api/controller/buscarBanco/', {
            method: 'POST',
            body: JSON.stringify({ 'busca': 'noticias' }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            setDados(data);
            setLoad(true);
        }).catch(error => console.error('Erro ao buscar notícias:', error));
    }, []);

    if (load && dados.length > 0) {
        return (
            <>
                <div className={styles.seeTooDiv}>
                    <div className={styles.headerSeeToo}>
                        <h3>Veja também</h3>
                    </div>

                    <div className="flex justify-around flex-col md:flex-row flex-wrap">
                        {dados.length >= 1 && (
                            <a href={`/news/${dados[dados.length - 1].titulo}`} className="w-[100%] md:w-[32%] mt-[1%] mr-[1%] duration-300 hover:scale-[99%]">
                                <div className="flex md:flex-row my-[2%] rounded-[15px] shadow-[2px_4px_8px_3px_rgba(0,0,0,0.75)]">
                                    <img src={`data:image;base64, ${Buffer.from(dados[dados.length - 1].imagem.data).toString('base64')}`} alt="" className="rounded-l-[15px] w-[45%] object-cover" />
                                    <div className="min-h-[160px] w-full p-[5%] flex flex-col">
                                        <h4 className="text-[1.2em] font-bold">{dados[dados.length - 1].titulo}</h4>
                                        <h5 className="text-[1em] mt-[5%]">Por {dados[dados.length - 1].autor}</h5>
                                    </div>
                                </div>
                            </a>
                        )}

                        {dados.length >= 2 && (
                            <a href={`/news/${dados[dados.length - 2].titulo}`} className="w-[100%] md:w-[32%] mt-[1%] mr-[1%] duration-300 hover:scale-[99%]">
                                <div className="flex md:flex-row my-[2%] rounded-[15px] shadow-[2px_4px_8px_3px_rgba(0,0,0,0.75)]">
                                    <img src={`data:image;base64, ${Buffer.from(dados[dados.length - 2].imagem.data).toString('base64')}`} alt="" className="rounded-l-[15px] w-[45%] object-cover" />
                                    <div className="min-h-[160px] w-full p-[5%] flex flex-col">
                                        <h4 className="text-[1.2em] font-bold">{dados[dados.length - 2].titulo}</h4>
                                        <h5 className="text-[1em] mt-[5%]">Por {dados[dados.length - 2].autor}</h5>
                                    </div>
                                </div>
                            </a>
                        )}

                        {dados.length >= 3 && (
                            <a href={`/news/${dados[dados.length - 3].titulo}`} className="w-[100%] md:w-[32%] mt-[1%] mr-[1%] duration-300 hover:scale-[99%] ">
                                <div className="flex md:flex-row my-[2%] rounded-[15px] shadow-[2px_4px_8px_3px_rgba(0,0,0,0.75)]">
                                    <img src={`data:image;base64, ${Buffer.from(dados[dados.length - 3].imagem.data).toString('base64')}`} alt="" className="rounded-l-[15px] w-[45%] object-cover" />
                                    <div className="min-h-[160px] w-full p-[5%] flex flex-col">
                                        <h4 className="text-[1.2em] font-bold">{dados[dados.length - 3].titulo}</h4>
                                        <h5 className="text-[1em] mt-[5%]">Por {dados[dados.length - 3].autor}</h5>
                                    </div>
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={styles.seeTooDiv}>
                    <div className={styles.headerSeeToo}>
                        <h3>Veja também</h3>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.cardIndi}>
                            <img src="/images/anuncie_aqui_banner.png" alt="" />
                            <div className={styles.cardConteudo}>
                                <h4></h4>
                                <h5></h5>
                            </div>
                        </div>

                        <div className={styles.cardIndi}>
                            <img src="/images/anuncie_aqui_banner.png" alt="" />
                            <div className={styles.cardConteudo}>
                                <h4></h4>
                                <h5></h5>
                            </div>
                        </div>

                        <div className={styles.cardIndi}>
                            <img src="/images/anuncie_aqui_banner.png" alt="" />
                            <div className={styles.cardConteudo}>
                                <h4></h4>
                                <h5></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}