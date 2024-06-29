import { useEffect, useState } from "react";
import styles from "./previewColumnist.module.scss";

export default function PreviewColumnist() {
    const [dados, setDados] = useState([]);
    const [colunistas, setColunistas] = useState([]);
    const [colunistaImg, setColunistaImg] = useState([]);
    const [colunistaDesc, setColunistaDesc] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('api/controller/buscarBanco/', {
            method: 'POST',
            body: JSON.stringify({ 'busca': 'colunistas' }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setDados(data.reverse());
                setLoad(true);

                let nomes = new Set();
                let descricoes = new Set();
                let imagens = new Set();

                data.forEach(dado => {
                    nomes.add(dado.nome);
                    descricoes.add(dado.descricao);
                    imagens.add(dado.imagem);
                });

                setColunistas(Array.from(nomes));
                setColunistaDesc(Array.from(descricoes));
                setColunistaImg(Array.from(imagens));
            })
            .catch(error => console.error("Erro ao buscar colunistas:", error));
    }, []);
    console.log(dados)

    return (
        <>
            <div className="flex flex-col">
                <h2 className="font-normal text-xl my-4 mb-6">
                    Colunistas
                </h2>
                <div className="flex flex-col gap-2">
                    {colunistas.length >= 0 && colunistaImg.length >= 0 && colunistaDesc.length >= 0 && colunistas.map((colunista, key) => (
                        key < 4 ?
                            <a
                                key={key}
                                href={`/columns/colunista/${colunista}`}
                                className="flex flex-col items-center bg-green-300 border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 
                                transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300
                                "
                            >
                                <img
                                    src={`data:image;base64, ${Buffer.from(colunistaImg[key].data).toString('base64')}`}
                                    alt=""
                                    className="object-cover lg:w-36 w-full h-48"
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5
                                        className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
                                    >
                                        {(colunista).substr(0, 16)}...
                                    </h5>
                                    {colunistaDesc[key] && typeof colunistaDesc[key] === 'string' && colunistaDesc[key].length > 50 ? (
                                        <p
                                            className="mb-3 font-normal text-gray-700 dark:text-gray-600"
                                        >
                                            {colunistaDesc[key].substr(0, 50)}...
                                        </p>
                                    ) : (
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-600"
                                        >
                                            {colunistaDesc[key]}
                                        </p>
                                    )}
                                </div>
                            </a>
                            : 
                            <>
                                <h2 className="font-normal text-sm my-4 mb-6">
                                Não há colunistas registrados
                                </h2>
                            </>
                    ))}
                </div>
            </div>
        </>
    )
}