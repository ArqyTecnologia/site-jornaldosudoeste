import { useState, useEffect } from "react";
// import styles from "./componente.module.scss";
import styles from "./teste.module.scss";
import imagejornal2 from "../../assets/imageojornal2.jpeg"
import Image from "next/image";

export default function LastNewsHome() {

    const [dados, setDados] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('api/controller/buscarBanco/', {
            method: 'POST',
            body: JSON.stringify({ 'busca': 'noticias' }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            setDados(data.reverse());
            setLoad(true);
        });
    }, []);
    // if (load && window.innerWidth > 1250)

    if (load)
        return (
            <>
                <div className="mx-24 grid lg:grid-cols-2 grid-row gap-6 ">
                    {/* card maior */}
                    <div
                        className="lg:max-w-full bg-green-300 border border-gray-200 rounded-lg shadow 
                        dark:bg-gray-800 dark:border-gray-700 
                        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                    >
                        <a href={`/news/${dados[0].titulo}`}>
                            <img
                                className="object-cover w-screen lg:h-80 h-28"
                                src={`data:image;base64, ${Buffer.from(dados[0].imagem.data).toString('base64')}`}
                                alt={dados[0].titulo}
                            />
                        </a>
                        <div className="p-4">
                            <a href="/news">
                                <h5
                                    className="inline-flex items-center px-2 py-1.5 mb-2 text-sm font-medium text-center text-green-300
                                    bg-white-100 rounded-md hover:bg-white-100 focus:ring-4 focus:outline-none focus:ring-blue-300
                                    ">
                                    Noticias
                                </h5>
                            </a>
                            <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-400">
                                {dados[0].titulo}
                            </h3>
                        </div>
                    </div>
                    {/* area dos cards menores */}
                    <div className="grid lg:grid-flow-col grid-rows-2 lg:gap-2 gap-4">
                        {dados.map((noticia, key) => (
                            key < 1 ?
                                null
                                :
                                key < 5 ?
                                    // cards menores
                                    <div
                                        className="lg:max-w-sm max-w-full bg-green-300 col-span-2 border
                                     border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
                                     transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300"
                                    >
                                        <a href={`/news/${noticia.titulo}`}>
                                            <img
                                                className="object-cover w-screen h-28"
                                                src={`data:image;base64, ${Buffer.from(noticia.imagem.data).toString('base64')}`}
                                                alt={noticia.titulo}
                                            />
                                        </a>
                                        <div className="p-4">
                                            <a href="/news">
                                                <h5
                                                    className="inline-flex items-center px-2 py-1.5 mb-2 text-sm font-medium text-center
                                                     text-green-300 bg-white-100 rounded-md 
                                                    ">
                                                    Noticias
                                                </h5>
                                            </a>
                                            <h3 className="mb-2 font-semibold text-lg text-gray-800 dark:text-gray-400">
                                                {noticia.titulo}
                                            </h3>
                                        </div>
                                    </div>
                                    : <></>
                        ))}
                    </div>
                </div>
                {/* {
                    <div className="bg-blue-600">
                        <div className="">
                            <a href={`/news/${dados[0].titulo}`}
                                className=""
                            >
                                <img
                                    className=""
                                    src={`data:image;base64, ${Buffer.from(dados[0].imagem.data).toString('base64')}`}
                                    alt={(dados[0].titulo).substr(0, 43)}
                                />
                                <h5 className="">
                                    {(dados[0].titulo).substr(0, 43)}...
                                </h5>
                            </a>
                        </div>

                        <div className="">
                            {dados.map((dados, key) => (
                                key < 1 ?
                                    null
                                    :
                                    key < 5 ?

                                        <div className="">
                                            <a
                                                href={`/news/${dados.titulo}`}
                                                className="">
                                                <img
                                                    className=""
                                                    src={`data:image;base64, ${Buffer.from(dados.imagem.data).toString('base64')}`}
                                                    alt=""
                                                />
                                                <div className="">
                                                    <h4 className="">
                                                        {(dados.titulo).substr(0, 27)}...
                                                    </h4>
                                                </div>
                                            </a>
                                        </div>
                                        :
                                        <></>
                            ))}
                        </div>
                    </div>
                } */}
            </>
        );
    else if (load) {
        return (
            <>
                <div className="">
                    {dados.map((noticia, key) => (
                        <div className="">
                            <a href={`/news/${noticia.titulo}`}>
                                <div className="">
                                    <img
                                        src={`data:image;base64, ${Buffer.from(noticia.imagem.data).toString('base64')}`}
                                        className="object-cover"
                                        alt=""
                                    />
                                    <div>
                                        <h1>Notícias</h1>
                                        <h3>noticia.titulo{noticia.titulo}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {
                    <div className="">
                        <div className="">
                            <a
                                href={`/news/${dados[0].titulo}`}
                                className="">
                                <img
                                    className=""
                                    src={`data:image;base64, ${Buffer.from(dados[0].imagem.data).toString('base64')}`}
                                    alt=""
                                />
                                <h5
                                    className="">
                                    {(dados[0].titulo).substr(0, 43)}...
                                </h5>
                            </a>
                        </div>

                        <div className="">
                            {dados.map((dados, key) => (
                                key < 1 ?
                                    null
                                    :
                                    key < 5 ?

                                        <div className=" ">
                                            <a
                                                href={`/news/${dados.titulo}`}
                                                className=""
                                            >
                                                <img className=""
                                                    src={`data:image;base64, ${Buffer.from(dados.imagem.data).toString('base64')}`}
                                                    alt=""
                                                />
                                                <div className="">
                                                    <h4>
                                                        {(dados.titulo).substr(0, 27)}...
                                                    </h4>
                                                </div>
                                            </a>
                                        </div>
                                        :
                                        <></>
                            ))}
                        </div>
                    </div>}
            </>
        );
    }
    else {
        return (
            <>

            </>
        );
    }
}
