import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from 'react';

export default function comments(props: any) {
    const [dados, setDados] = useState([]);
    const [load, setLoad] = useState(true); // alterar para false depois
    const [recaptcha, setRecaptcha] = useState(false);
    const [enviado, setEnviado] = useState(false);
    
    const [nome, setNome ] = useState("");
    const [email, setEmail] = useState("");
    const [texto, setTexto] = useState("");
    
    useEffect(() =>{
        fetch('/api/controller/receberComentarios/', {
            method: 'POST',
            body: JSON.stringify({ 'id': props.id }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            setDados(data.reverse());
            setLoad(true);
        });
    }, [enviado]);
    

    function enviarComentario(e :any){
        let data = new Date();
        let dataSaida = String(data.getDate());
        switch (data.getMonth()) {
            case 0:
                dataSaida += " de janeiro de ";
                break;
            case 1:
                dataSaida += " de fevereiro de ";
                break;
            case 2:
                dataSaida += " de março de ";
                break;
            case 3:
                dataSaida += " de abril de";
                break;
            case 4:
                dataSaida += " de maio de "
                break;
            case 5:
                dataSaida += " de junho de ";
                break;
            case 6:
                dataSaida += " de julho de ";
                break;
            case 7:
                dataSaida += " de agosto de ";
                break;
            case 8:
                dataSaida += " de setembro de ";
                break;
            case 9:
                dataSaida += " de outubro de ";
                break;
            case 10:
                dataSaida += " de novembro de ";
                break;
            case 11:
                dataSaida += " de dezembro de ";
                break;
        }
        dataSaida += String(data.getFullYear());

        if(recaptcha){
            let idReal = (Math.floor(Math.random() * 2000000000000));
            fetch('/api/controller/comentarios/', {
                method: 'POST',
                body: JSON.stringify({ 'id': props.id, 'idReal': idReal, 'nome': nome , 'data': dataSaida,'email': email, 'texto': texto}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setEnviado(true);
            alert("Seu comentário foi enviado!")
        }
        else{
            alert("Verifique o ReCaptcha!")
        }
    }
        

    
    if (load) {
        return(
            <>
                <div className="w-4/5 m-auto">
                    <h1 className="py-3 text-2xl font-bold">Comentários</h1>
                        { dados.length > 0?
                            dados.map((comentarios, key) => (
                                key < 5 ?
                                    <div className="w-11/12 m-auto flex items-center py-3 h-[100%] border rounded-xl my-1 px-3">
                                        <div className="w-[30%]">
                                            <h2> {comentarios.nome} </h2>
                                            <h3> {comentarios.data} </h3>
                                        </div>
                                        <div className="w-[70%] flex items-center">
                                            <div className="w-[1px] min-h-[100px] rounded-xl bg-gray-950 mr-5 ml-2"></div>
                                            <p className="text-justify"> {comentarios.texto} </p>
                                        </div>
                                    </div>
                                : null
                            ))
                            : <h2 className="w-11/12 m-auto"> Seja o primeiro a comentar!</h2>
                        }
                    <h1 className="py-3 text-2xl font-bold"> Deixe um comentário</h1>
                    <div>
                        <form onSubmit={enviarComentario} className="my-5 flex flex-col" method="POST">
                            <input type="text" name="nome" placeholder="Seu nome*" className="w-full rounded-md bg-gray-200 outline-none border border-gray-300 px-6 py-2 mb-4" onChange={(e) => setNome(e.target.value)} required/>

                            <input type="email" name="email" placeholder="Seu email*" className="w-full rounded-md bg-gray-200 outline-none border border-gray-300 px-6 py-2 mb-4" onChange={(e) => setEmail(e.target.value)} required/>

                            <textarea name="texto" placeholder="Seu comentário*" className="w-full min-h-[125px] rounded-md bg-gray-200 outline-none border border-gray-300 px-6 py-2 mb-4" onChange={(e) => setTexto(e.target.value)} required></textarea>

                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} onChange={(e:any) => setRecaptcha(true)} className="my-4"/>
                            <input
                                className="w-[24%] bg-green-100 hover:bg-green-300 text-white-100 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                                type="submit"
                                value="Enviar Comentário" />
                        </form>
                    </div>
                </div>
            </>
        );
    }
}