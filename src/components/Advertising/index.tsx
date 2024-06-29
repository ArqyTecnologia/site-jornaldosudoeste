import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import bannerpublicidade from "../../../public/images/anuncie_aqui_banner.png";

export function Advertising() {
    const [dados, setDados] = useState([]);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [load, setLoad] = useState(false);
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/controller/buscarBanco/', {
                    method: 'POST',
                    body: JSON.stringify({ 'busca': 'publicidades' }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                console.log('Resposta da API:', data); // Log da resposta da API
                
                setDados(data);
                // Sorteia um índice inicial aleatório quando os dados são carregados
                if (data.length > 0) {
                    setCurrentAdIndex(Math.floor(Math.random() * data.length));
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            } finally {
                setLoad(true);
            }
        }

        fetchData();
    }, []);

    const handleCloseModal = () => {
        setShowModal(false); // Fecha o modal ao clicar no botão de fechar
    };

    if (!showModal) {
        return null; // Não renderiza nada se o modal não está aberto
    }

    // Verifica se ainda não carregou os dados
    if (!load) {
        return (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    Carregando...
                </div>
            </div>
        );
    }

    const dadoSelecionado = dados[currentAdIndex];
    console.log('Dado selecionado:', dadoSelecionado); // Log do dado selecionado

    if (!dadoSelecionado || !dadoSelecionado.link) {
        console.error('Link não definido:', dadoSelecionado); // Log do erro
        return null;
    }

    let verificaHttp = "";
    if (dadoSelecionado.link[0] !== "h" && dadoSelecionado.link[0] !== "t") verificaHttp = "http://";
    if (dadoSelecionado.link.slice(0, 4).toLowerCase() !== "http") verificaHttp += "www.";


    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
                <a href={`${verificaHttp}${dadoSelecionado.link}`} target="_blank" rel="noopener noreferrer">
                <img src={`data:image;base64, ${Buffer.from(dadoSelecionado.imagem.data).toString('base64')}`} alt="Publicidade" className="object-cover" />
                </a>
            </div>
        </div>
    );
}
