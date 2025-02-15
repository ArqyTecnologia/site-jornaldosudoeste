import Link from "next/link";
import styles from "./navbar.module.scss";
import router, { useRouter } from "next/router";
import { useState } from "react";

export function Navbar() {

    const router = useRouter();

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    return (
        <>
            <div className="flex justify-center items-center bg-green-100  py-4 px-6 lg:px-20 text-white-100 text-sm ">
                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-green-300"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-green-300"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-green-300"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            {/* toggle class based on isNavOpen state */}
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                <li className={`my-auto uppercase border-b border-green-100 hover:text-green-300 ${router.pathname == "/about" ? "text-blue-400" : "text-blue-900"}`} >
                                    <Link href="/testes">
                                        Início
                                    </Link>
                                </li>
                                <li className={`my-auto uppercase border-b  border-green-100 hover:text-green-300 ${router.pathname == "/about" ? "text-blue-400" : "text-blue-900"}`} >
                                    <Link href="/journal">
                                        O Jornal
                                    </Link>
                                </li>
                                <li className={`my-auto uppercase border-b  border-green-100 hover:text-green-300 ${router.pathname == "/about" ? "text-blue-400" : "text-blue-900"}`} >
                                    <Link href="/legalPublications">Publicações Legais</Link>
                                </li>
                                <li className={`my-auto uppercase border-b  border-green-100 hover:text-green-300 ${router.pathname == "/about" ? "border-green-100" : "text-green-300"}`} >
                                    <Link href="/news">Noticias</Link>
                                </li>
                                <li className={`my-auto uppercase border-b border-green-100 hover:text-green-300 ${router.pathname == "/about" ? "border-green-100" : "text-green-300"}`} >
                                    <Link href="/youtubeChannel">Canal JS</Link>
                                </li>
                                <li className={`my-auto uppercase border-b border-green-100 hover:text-green-300 ${router.pathname == "/about" ? "border-green-100" : "text-green-300"}`} >
                                    <Link href="/columns">Colunas </Link>
                                </li>

                                <li className={`my-auto uppercase border-b border-green-100 hover:text-green-300 ${router.pathname == "/about" ? "border-green-100" : "text-green-300"}`} >
                                    <Link href="/contact">Contato</Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden space-x-16 lg:flex font-semibold text-sm items-center justify-center">
                        <li className={`my-auto uppercase hover:text-green-300 ${router.pathname == "#" ? "text-green-300" : "text-white-100"}`} >
                            <Link href="/" legacyBehavior>
                                Início
                            </Link>
                        </li>
                        <li className={`my-auto uppercase hover:text-green-300 ${router.pathname == "/journal" ? "text-green-300" : "text-white-100"}`} >
                            <Link href="/journal">
                                O Jornal
                            </Link>
                        </li>
                        <li className={`my-auto uppercase hover:text-green-300 ${router.pathname == "/legalPublications" ? "text-green-300" : "text-white-100"}`} >
                            <Link href="/legalPublications">Publicações Legais</Link>
                        </li>
                        <li className={`my-auto uppercase hover:text-green-300 ${router.pathname == "/news" ? "text-green-300" : "text-white-100"}`} >
                            <Link href="/news">Noticias</Link>
                        </li>
                        <li className={`my-auto uppercase hover:text-green-300 ${router.pathname == "/youtubeChannel" ? "text-green-300" : "text-white-100"}`} >
                            <Link href="/youtubeChannel">Canal JS</Link>
                        </li>
                        <li className={`my-auto uppercase hover:text-green-300 ${router.pathname == "/columns" ? "text-green-300" : "text-white-100"}`} >
                            <Link href="/columns">Colunas </Link>
                        </li>

                        <li className={`my-auto uppercase hover:text-green-300 ${router.pathname == "/contact" ? "text-green-300" : "text-white-100"}`} >
                            <Link href="/contact">Contato</Link>
                        </li>
                    </ul>

                    {/* <ul className={styles.navbar}>
                     trocar a  por Link 
                    <li>
                        <Link href="/">Início</Link>
                    </li>
                    <li>
                        <Link href="/journal">O Jornal
                        </Link></li>
                    <li>
                        <Link href="/legalPublications">Publicações Legais</Link>
                    </li>
                    <li>
                        <Link href="/youtubeChannel">Canal JS</Link></li>
                    <li>
                        <Link href="#">Colunas </Link>
                    </li>
                    <li>
                        <Link href="#">Noticias</Link>
                    </li>
                    {/* <li>
                        <Link href="#">Eventos</Link>
                    </li> 
                    <li>
                        <Link href="#">Contato</Link>
                    </li>
                    </ul> */}
                </nav><style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
            </div>
        </>
    )
}