import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './legalPublications.module.scss';

export default function legalPublicationsForm() {
    const [recaptcha, setRecaptcha] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [segmento, setSegmento] = useState('');
    const [arquivo, setArquivo] = useState();
    const [observacoes, setObservacoes] = useState('');
    let input = document.getElementsByName('arquivo')[0];
    
    function enviarInfo(e: any){
        e.preventDefault();
        
        let id = (String(Math.floor(Math.random() * 200000000000000))+"-"+String(Math.floor(Math.random() * 200000000000000))+ "-" + String(Math.floor(Math.random() * 200000000000000)));


        if(input.files[0].type != "application/pdf"){
            alert("Só é possível enviar arquivos em PDF!");
            return;
        }

        let arq = input.files[0];

        let leitor = new FileReader();
        let arqSaida : any;
        
        leitor.addEventListener('load', function(){
            arqSaida = leitor.result;
            arqSaida = arqSaida.split(',')[1];
            setArquivo(arqSaida.toString());
            console.log("primeiro:", arqSaida.toString());
        })
        leitor.readAsDataURL(arq);

        if(recaptcha){
            fetch('/api/controller/publicacoes/', {
                method: 'POST',
                body: JSON.stringify({ 'id': id, 'nome':nome, 'email': email, 'segmento': segmento, 'observacoes': observacoes, 'arquivo': arquivo }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert("Formulário Enviado!");
        }
        else{
            alert("Verifique o ReCaptcha! ");
        }
    }

    return (
        <>
           <div className="w-4/5 m-auto items-center p-8">
                <form onSubmit={enviarInfo} method="POST"
                    className="bg-white px-8 pt-6 pb-8 mb-4"
                >
                    <h2 className="font-bold text-xl font-light pb-4">Formulário para envio de publicações legais</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Nome da entidade*
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="nome" onChange={(e) => setNome(e.target.value)} required />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            E-mail do Responsável*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Segmento*</label>
                        <div className="flex gap-5">
                            <input type="radio" name="segmento" value="Prefeitura" onChange={(e) => setSegmento(e.target.value)} required /> Prefeitura
                            <input type="radio" name="segmento" value="Sindicato" /> Sindicato e Entidades
                            <input type="radio" name="segmento" value="Câmara" /> Câmara
                            <input type="radio" name="segmento" value="Outros" /> Outros
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Faça o upload do arquivo*</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="file" name="arquivo" required />

                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Observações(opcional)
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="observacoes" onChange={(e) => setObservacoes(e.target.value)}>
                        </textarea>
                    </div>

                    <div className="py-8">
                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} onChange={(e: EventListener) => setRecaptcha(true)} />
                    </div>

                    <div className="flex items-center justify-between">
                        <input
                            type="submit"
                            value="Enviar"
                            className="bg-green-100 hover:bg-green-300 text-white-100 font-semibold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                        />

                    </div>
                </form>
            </div>
        </>
    );
}