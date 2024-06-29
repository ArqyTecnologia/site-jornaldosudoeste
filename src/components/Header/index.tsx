import Image from 'next/image';
import Link from "next/link";
import { Climate } from "../Climate";
import { Price } from "../Price";
import { Navbar } from "../Navbar";
import styles from "./header.module.scss";
import { useState } from 'react';

import { EnvelopeSimple, FacebookLogo, InstagramLogo, XLogo, YoutubeLogo } from '@phosphor-icons/react';

export function Header() {
    const [busca, setBusca] = useState('.');

    function buscarNoticia(e: any) {
        e.preventDefault();
        if (busca != '.')
            window.location.assign(`/news/newsBusca/${busca}`)
        else null
    }

    let data = new Date();
    let mes = ' ';
    switch (data.getMonth()) {
        case 0:
            mes = "JAN";
            break;
        case 1:
            mes = "FEV";
            break;
        case 2:
            mes = "MAR";
            break;
        case 3:
            mes = "ABR";
            break;
        case 4:
            mes = "MAIO"
            break;
        case 5:
            mes = "JUN";
            break;
        case 6:
            mes = "JUL";
            break;
        case 7:
            mes = "AGO";
            break;
        case 8:
            mes = "SET";
            break;
        case 9:
            mes = "OUT";
            break;
        case 10:
            mes = "NOV";
            break;
        case 11:
            mes = "DEZ";
            break;
    }
    return (
        <>
            <header className="w-full flex flex-col">
                {/* menu superior */}
                <div className="flex lg:h-1 items-center lg:justify-between justify-center lg:p-5 p-3 font-normal text-sm" >
                    {/* hora e email  */}
                    <div className="flex items-center lg:justify-between lg:gap-3 gap-1">
                        <h2 className="">
                            {data.getDate()} {mes} {data.getFullYear()}
                        </h2>

                        <div className="flex items-center lg:visible invisible">
                            <strong> | </strong>
                            <EnvelopeSimple size={24} />

                            <a href='mailto:redacao@jornaldosudoeste.com' target='_blank'>
                                <span>redação@jornaldosudoeste.com</span>
                            </a>
                        </div>
                    </div>

                    {/* link das redes sociais */}
                    <div className="flex items-center justify-between gap-3 lg:right-5">

                        <Link href="https://www.facebook.com/jornaldosudoestebahia/" target="_blank">
                            <FacebookLogo size={16} alt='Facebook' />
                        </Link>

                        <Link href="https://www.instagram.com/jornaldosudoeste/" target="_blank">
                            <InstagramLogo size={16} alt='Instagram' />
                        </Link>

                        <Link href="https://twitter.com/jsudoestebahia" target="_blank">
                            <XLogo size={16} alt='X (ex Twitter)' />
                        </Link>

                        <Link href="https://www.youtube.com/@JornaldoSudoestecanaljs" target="_blank">
                            <YoutubeLogo size={16} alt='Canal do Youtube' />
                        </Link>
                    </div>
                </div>

                {/* Header body */}
                <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center px-9 py-4 bg-slate-100 ">
                    <a href="/" className="">
                        <Image
                            src="/images/LogotipoCortado.png"
                            width={400}
                            height={200}
                            alt="Logotipo Jornal Sudoeste"
                        />
                    </a>
                    <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-between gap-4">
                        <div className='mb-2'>
                            <Climate />
                        </div>
                        <div className='mb-2'>
                            <Price />
                        </div>


                        <div className="flex items-center mb-4">
                            <form onSubmit={buscarNoticia}>
                                <input
                                    type="text"
                                    name="busca"
                                    placeholder={'Buscar no JS'}
                                    className='rounded-md p-1.5 italic font-thin border-green-100 shadow-sm'
                                    onChange={(e) => setBusca(e.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Navbar />
                </div>
            </header>
        </>
    )
}