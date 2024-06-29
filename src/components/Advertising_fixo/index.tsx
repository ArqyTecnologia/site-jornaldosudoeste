import Image from 'next/image'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import bannerpublicidade from "../../../public/images/anuncie_aqui_banner.png"

export function AdvertisingFix() {
    const [dados, setDados] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('/api/controller/buscarBanco/', {
            method: 'POST',
            body: JSON.stringify({ 'busca': 'publicidades' }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            let saida = new Array();
            data.map((dado: any) => (
                analisaTotal(analisaInicio(dado.data_inicio), analisaFinal(dado.data_final)) ?
                    saida.push(dado)
                    :
                    null
            ));
            setDados(saida);
            setLoad(true);

        });
    }, []);
    
    function analisaTotal(valor1: any, valor2: any) {
        if (valor1 && valor2) {
            return true
        }
        return false;
    }

    function analisaFinal(data_final: string) {
        let data = new Date();
        let dia = Number(data_final.split("/")[0]);
        let mes = Number(data_final.split("/")[1]);
        let ano = Number(data_final.split("/")[2]);

        if (ano >= data.getFullYear()) {
            if (ano == data.getFullYear()) {
                if (mes < data.getMonth() + 1) {
                    return false;
                } else {
                    if (mes == data.getMonth() + 1) {
                        if (dia >= data.getDate()) {
                            return true;
                        }
                        else {
                            return true;
                        }
                    } else {
                        return true
                    }
                }
            } else {
                return true
            }
        }
    }

    function analisaInicio(data_inicio: string) {
        let data = new Date();
        let dia = Number(data_inicio.split("/")[0]);
        let mes = Number(data_inicio.split("/")[1]);
        let ano = Number(data_inicio.split("/")[2]);

        if (ano > data.getFullYear()) {
            return false;
        } else {
            if (ano == data.getFullYear()) {
                if (mes > data.getMonth() + 1) {
                    return false;
                } else {
                    if (mes == data.getMonth() + 1) {
                        if (dia <= data.getDate()) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                }
            }
        }
    }
    
    if (load) {
        if (dados.length > 0) {
            let numeroAleatorio = Math.floor(Math.random() * dados.length);
            let verificaHttp = "";
            if(dados[numeroAleatorio].link[0] != "h" && dados[numeroAleatorio].link[0] != "t")
                verificaHttp = "HTTP://";
            if(dados[numeroAleatorio].link[8] != "w")
                verificaHttp +="www."
            return (
                <>
                    <div className="flex items-center justify-center pt-6">
                        <a href={`${verificaHttp}${dados[numeroAleatorio].link}`} target="_blank">
                            {<img src={`data:image;base64, ${Buffer.from(dados[numeroAleatorio].imagem.data).toString('base64')}`} alt="" className="object-cover"/>}
                        </a>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="flex items-center justify-center pt-6 pb-6">
                        <Image
                            src={bannerpublicidade}
                            alt="Publicidade"

                        />
                    </div>
                </>
            );
        }
    }
}