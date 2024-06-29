import styles from "./lastNews.module.scss";
import { useState, useEffect } from "react";

import fotojornal from "../../assets/dengue.jpg"

export default function LastNews() {
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
        });
    }, []);

    if (load)
        return (
            <>
                <div className="flex flex-col">
                    <h2 className="font-normal text-xl my-4">
                        Últimas Noticias
                    </h2>

                    <div className="flex flex-col my-4">

                        <a href={`/news/${dados[dados.length - 1].titulo}`}
                            className="flex flex-col items-center bg-green-300 border border-gray-200 rounded-lg 
                            shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 
                            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300"
                        >
                            <img 
                                src={`data:image;base64, ${Buffer.from(dados[dados.length - 1].imagem.data).toString('base64')}`}
                                alt={`${dados[dados.length - 1].titulo}`}
                                className="object-cover lg:w-36 w-full h-48"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                    {dados[dados.length - 1].titulo}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                                    Por {dados[dados.length - 1].autor}
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-col my-4">

                        <a href={`/news/${dados[dados.length - 2].titulo}`}
                            className="flex flex-col items-center bg-green-300 border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100
                            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        >
                            <img src={`data:image;base64, ${Buffer.from(dados[dados.length - 2].imagem.data).toString('base64')}`}
                                alt=""
                                className="object-cover lg:w-36 w-full h-48"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 
                                    className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    {dados[dados.length - 2].titulo}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                                    Por {dados[dados.length - 2].autor}
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col my-4">

                        <a href={`/news/${dados[dados.length - 3].titulo}`}
                            className="flex flex-col items-center bg-green-300 border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 
                            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        >
                            <img src={`data:image;base64, ${Buffer.from(dados[dados.length - 3].imagem.data).toString('base64')}`}
                                alt=""
                                className="object-cover lg:w-36 w-full h-48"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 
                                    className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    {dados[dados.length - 3].titulo}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                                    Por {dados[dados.length - 3].autor}
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col my-4">

                        <a href={`/news/${dados[dados.length - 4].titulo}`}
                            className="flex flex-col items-center bg-green-300 border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 
                            transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        >
                            <img src={`data:image;base64, ${Buffer.from(dados[dados.length - 4].imagem.data).toString('base64')}`}
                                alt=""
                                className="object-cover lg:w-36 w-full h-48"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 
                                    className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    {dados[dados.length - 4].titulo}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                                    Por {dados[dados.length - 4].autor}
                                </p>
                            </div>
                        </a>
                    </div>
                    
                </div>

            </>
        );
    else {
        return (
            <>
                    <div className="">
                        <h2 className="font-normal text-2xl my-4">
                            Últimas Noticias
                        </h2>

                        <div className="flex flex-col gap-2">
                            <div className={styles.cardIndi}>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h4></h4>
                                    <h5></h5>
                                </div>
                            </div>

                            <div className={styles.cardIndi}>
                                
                                <div className={styles.cardConteudo}>
                                    <h4></h4>
                                    <h5></h5>
                                </div>
                            </div>

                            <div className={styles.cardIndi}>
                                
                                <div className={styles.cardConteudo}>
                                    <h4></h4>
                                    <h5></h5>
                                </div>
                            </div>

                            <div className={styles.cardIndi}>
                                
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