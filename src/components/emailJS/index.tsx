import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './contact.module.scss';
import { EnvelopeOpen } from "@phosphor-icons/react";

export default function Contact() {
    const [recaptcha, setRecaptcha] = useState(false);
    const [email, setEmail] = useState('');

    function cadastrarEmail(e: any) {
        e.preventDefault();
        if (recaptcha) {
            console.log("Enviando email:", email);
            fetch('/api/controller/email/', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Email Enviado com sucesso!');
                    setEmail('');
                } else {
                    alert('Erro ao enviar email.');
                }
            }).catch(error => {
                console.error('Error:', error);
                alert('Erro ao enviar email.');
            });
        } else {
            alert("Verifique o ReCAPTCHA!");
        }
    }

    function sendEmail(e: any) {
        const dadosEnvio = {
            message: " Teste ",
            link: " ",
            emails: [' RECEBER EMAILS DO BANCO ']
        }

        emailjs.send(
            process.env.NEXT_PUBLIC_REACT_APP_SERVICE_EMAILJS_ID,
            process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_EMAILJS_ID,
            dadosEnvio,
            process.env.NEXT_PUBLIC_REACT_APP_USER_EMAILJS_ID
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
            <div className="px-6 pt-6 bg-green-300 rounded-lg ">
                <form onSubmit={cadastrarEmail}>
                    <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-2 px-28">
                        <div className="md:mb-6 md:ms-auto px-12">
                            <div className="flex items-center">
                                <EnvelopeOpen size={40} />
                                <h3 className="text-xl">
                                    <strong>Newsletter</strong>
                                </h3>
                            </div>
                            <p className="text-l">
                                Fique por dentro das novidades do jornal
                            </p>
                        </div>

                        <div className="md:mb-6 mx-2 ml-50 flex flex-col items-center" data-twe-input-wrapper-init>
                            <input
                                type="email"
                                className="peer text-white-100 block min-h-[auto] w-full rounded-sm border-2 
                                bg-transparent px-2 py-[0.32rem] 
                                leading-[1.6] outline-none transition-all duration-200 
                                ease-linear focus:placeholder:opacity-100 
                                peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 
                                motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-200 
                                dark:autofill:shadow-autofill dark:peer-focus:text-primary"
                                id="email"
                                required
                                name="user_email"
                                placeholder='Seu melhor e-mail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} onChange={() => setRecaptcha(true)} className="my-4" />
                            <button
                                type="submit"
                                className="inline-block rounded bg-white-100 px-6 pb-2 pt-2.5 
                                text-xs font-medium uppercase leading-normal text-white shadow-primary-3 
                                transition duration-150 ease-in-out hover:bg-primary-accent-300 
                                hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 
                                focus:outline-none focus:ring-0 active:bg-primary-600 
                                active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong 
                                dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mb-4"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                            >
                                Inscrever
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
