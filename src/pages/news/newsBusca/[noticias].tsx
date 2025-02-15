import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../news.module.scss";
import Share from "../../../components/Share";
import { Advertising } from "@/src/components/Advertising";
import SeeToo from "@/src/components/SeeToo";
import DigitalWeekly from "@/src/components/DigitalWeekly";
import DigitalBiWeekly from "@/src/components/digitalBiWeekly";

export default function News() {
    const { query } = useRouter();

    const [dados, setDados] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const noticiaTitulo = query?.noticias;
        fetch('/api/controller/buscarBancoUnico/', {
            method: 'POST',
            body: JSON.stringify({ 'busca': 'noticiasBusca', 'indicadorBusca': noticiaTitulo }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            setDados(data.reverse());
            setLoad(true);
        });
    }, [query?.noticias]);


    if (load)
        return (
            <>
                <Head>
                    <title> Buscando... - JS </title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <main className="flex flex-col mt-6 m-auto">
                    <h1 className="ml-[10%] text-xl mb-4">Você buscou por: {query?.noticias}</h1>

                    <div className={styles.mainPageNoticias}>
                        {dados.length > 0 ?
                            dados.map((dado) => (
                                <div className={styles.noticiasCardMenor}>
                                        <a href={`/news/${dado.titulo}`}>
                                            <div className={styles.cardDentro}>
                                                <img src={`data:image;base64, ${Buffer.from(dado.imagem.data).toString('base64')}`} className="object-cover" alt="" />
                                                <h3>{dado.titulo}</h3>
                                            </div>
                                        </a>
                                    </div>
                            ))
                            :
                            <div className="flex flex-col text-center items-center justify-between p-4">
                                <h1 className="font-light text-2xl uppercase">
                                    Não foram encontrados resultados para esta busca.
                                </h1>
                                {/* <h2 className="font-light text-xl pt-4"> Acompanhe nossas repotagens! </h2> */}
                            </div>
                        }
                    </div>
                    <SeeToo/>
                    <DigitalWeekly/>
                    <DigitalBiWeekly/>
                </main>
            </>
        );
    else {
        return (
            <>
                <Head>
                    <title>Jornal Sudoeste </title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
            </>
        );
    }
}