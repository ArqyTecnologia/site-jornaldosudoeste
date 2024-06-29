import  Head  from "next/head";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import SeeToo from "../../components/SeeToo";
import DigitalWeekly from "@/src/components/DigitalWeekly";
import DigitalBiWeekly from "@/src/components/digitalBiWeekly";

export default function Contact() {
    const [recaptcha, setRecaptcha] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    function enviarEmail(e : any){
        e.preventDefault();

        if(recaptcha && !(enviado)){
            alert("Formulário Enviado!");
            setEnviado(true);
            const dadosEnvio = {
                nome: nome,
                email: email,
                assunto: assunto,
                mensagem: mensagem
            }
            
            emailjs.send(
                process.env.NEXT_PUBLIC_REACT_APP_SERVICE2_EMAILJS_ID, 
                process.env.NEXT_PUBLIC_REACT_APP_CONTACT_TEMPLATE_EMAILJS_ID, 
                dadosEnvio, 
                process.env.NEXT_PUBLIC_REACT_APP_USER2_EMAILJS_ID
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
        }else if(enviado){
            alert("Você ja enviou este formulário uma vez, se deseja enviar este formulário novamente recarregue a página!")
        }
        else{
            alert("Verifique o ReCaptcha! ");
        }
    }

    return (
        <>
            <Head>
                    <title> Contato - JS </title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="w-full items-center justify-center">
                <div className="flex flex-col text-center p-8">
                    <h1 className="font-light text-2xl uppercase"> Entre em contato </h1>
                    <h2 className="font-light text-xl pt-4"> Fale conosco, queremos saber o que você pensa! </h2>
                </div>

                <div className="m-w-full items-center p-8 w-4/5 m-auto">
                    <form
                        onSubmit={enviarEmail}
                        className="bg-white px-8 pt-6 pb-8 mb-4"
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Nome*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" name="nome" onChange={(e) => setNome(e.target.value)} required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">E-mail*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)} required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Assunto*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="assunto"
                                onChange={(e) => setAssunto(e.target.value)} />

                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Mensagem
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="Observações"
                                onChange={(e) => setMensagem(e.target.value)}
                            />
                        </div>
                        <div className="py-8">
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} onChange={(e: EventListener) => setRecaptcha(true)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <input
                                className="bg-green-100 hover:bg-green-300 text-white-100 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value="Enviar" />
                        </div>

                    </form>
                </div>
                <SeeToo />
                <DigitalWeekly />
                <DigitalBiWeekly/>
            </main>
        </>
    );
}