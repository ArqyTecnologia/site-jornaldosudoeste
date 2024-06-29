import Image from 'next/image';
import styles from './footer.module.scss';
import Link from "next/link";

import logoMarca from '../../../public/images/Logo Marca.png'
import { Envelope, MapPin, Phone } from '@phosphor-icons/react';

export function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-200">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <Image
                                src={logoMarca}
                                alt=" Logomarca em JS"
                                width={100}
                            //className="h-8 me-3"  
                            />
                            <p className="self-center pr-6 items-center text-justify lg:max-w-md text-sm dark:text-gray-900 w-2/3">
                                O <strong> Jornal do Sudoeste</strong> surgiu em março de 1998 em Brumado,
                                com a proposta de adotar uma linha editorial crítica e independente, abrindo espaço para
                                todas as correntes de pensamento e pautando sua atuação na busca intransigente da verdade.
                            </p>
                        </a>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 sm:gap-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Links Úteis
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/journal" className="hover:underline">
                                        O Jornal
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/legalPublications" className="hover:underline">
                                        Publicações Legais
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/politicasdeprivacidade" target="_blank" className="hover:underline">
                                        Políticas de Privacidade
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/termosdeuso" target="_blank" className="hover:underline">
                                        Termos de Uso
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Redação
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-500 font-medium text-sm mx-w-md">
                                <li className="mb-4 flex items-center">
                                    <Phone size={18} />
                                    <a href='tel:+55773441-7081' target='_blank' className="hover:underline px-2">
                                        77 3441-7081
                                    </a>
                                </li>
                                <li className="mb-4 flex items-center">
                                    <MapPin size={18} />
                                    <a href='https://maps.app.goo.gl/R6jv11Sqik2LcbCV7' target='_blank' className="hover:underline px-2">
                                        Praça Capitão Francisco <br />de Souza Meira, n° 164,Centro - Salas 4 e 5 <br /> Brumado-BA CEP: 46100-155
                                    </a>
                                </li>
                                <li className="mb-4 flex items-center">
                                    <Envelope size={18} />
                                    <a href='mailto:redacao@jornaldosudoeste.com' target='_blank' className="hover:underline px-2">
                                        redacao@jornaldosudoeste.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Siga-nos</h2>
                            <ul className="text-gray-500 dark:text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/jornaldosudoestebahia/" target="_blank" className="hover:underline">
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/jornaldosudoeste/" target="_blank" className="hover:underline">
                                        Instagram
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/jornaldosudoeste/" target="_blank" className="hover:underline">
                                        X (ex Twitter)
                                    </a>
                                </li>
                                <li className="">
                                    <a href="https://www.youtube.com/@JornaldoSudoestecanaljs" target="_blank" className="hover:underline">
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex items-center justify-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2024
                        <a href="https://flowbite.com/" className="hover:underline">Jornal do Sudoeste</a>
                        . Todos os direitos reservados. É proibida a reprodução total ou parcial do conteúdo do site.
                    </span>

                </div>
            </div>
        </footer>
    )
}