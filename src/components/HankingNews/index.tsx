import styles from "../LastNews/lastNews.module.scss";
import { useState, useEffect } from "react";

import fotojornal from "../../assets/dengue.jpg"

export default function LastNews() {
    const [dados, setDados] = useState([]);
    const [rank, setRank] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('/api/controller/todosComentarios').then(response => response.json()).then(data => {
            let array = data.map(dado => dado.noticia);
            array = [...new Set(array)];

            let qtdArray = new Array(array.length).fill(0);

            data.forEach(dado => {
                qtdArray[array.indexOf(dado.noticia)]++;
            });

            let rankArray = [];
            for (let i = 0; i < 4; i++) {
                if (Math.max(...qtdArray) !== 0) {
                    rankArray.push(qtdArray.indexOf(Math.max(...qtdArray)));
                    qtdArray[qtdArray.indexOf(Math.max(...qtdArray))] = 0;
                }
            }

            setRank(rankArray.map(index => array[index]));
        });

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

    if (load && Array.isArray(dados)) {
        return (
            <>
                <div className="flex flex-col">
                    <h2 className="font-normal text-xl my-4">
                        Mais lidas
                    </h2>

                    {rank.map((rankedId, index) => (
                        <div
                            key={index}
                            className="flex flex-col my-4">
                            {dados.map((dado) => (
                                dado.id === rankedId ? (
                                    <a 
                                        key={dado.id} 
                                        href={`/news/${dado.titulo}`}
                                        className="flex flex-col items-center bg-green-300 border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 
                                        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300
                                        "
                                    >
                                        <img 
                                            src={`data:image;base64, ${Buffer.from(dado.imagem.data).toString('base64')}`}
                                            alt=""
                                            className="object-cover lg:w-36 w-full h-48"
                                        />
                                        <div 
                                            className="flex flex-col justify-between p-4 leading-normal"
                                        >
                                            <h5 
                                                className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                                {dado.titulo}
                                            </h5>
                                            <p 
                                                className="mb-3 font-normal text-gray-700 dark:text-gray-600"
                                            >
                                                Por {dado.autor}
                                            </p>
                                        </div>
                                    </a>
                                ) : null
                            ))}
                        </div>
                    ))}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="">
                    <h2 className="font-normal text-2xl my-4">
                        Mais lidas
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