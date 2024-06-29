import Image from "next/image"
import Link from "next/link"

import fotoDengue from "../../assets/dengue.jpg"

import styles from "./article.module.scss"


export function Article() {
    return (
        <>
            <main className={styles.container}>
                <article className={styles.article}>
                    <Link href="#"  >
                        <Image
                            src={fotoDengue}
                            alt="foto do mosquito transmissor de dengue, ele é preto com bolinhas brancas "
                        />
                        <div className={styles.legend}>
                            <strong>Aumento de casos de dengue prevalecem na cidade de Brumado</strong>
                        </div>
                    </Link>

                </article>
            </main>


            <div className={styles.grouppreviewnews}>
                <article className={styles.smallarticle}>
                    <Link href="#"  >
                        <Image
                            src={fotoDengue}
                            alt="foto do mosquito transmissor de dengue, ele é preto com bolinhas brancas "
                        />
                        <div className={styles.legend}>
                            <strong>Aumento de casos de dengue prevalecem na cidade de Brumado</strong>
                        </div>
                    </Link>
                </article>

            </div>
        </>
    )
}