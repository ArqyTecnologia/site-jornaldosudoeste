import styles from "./share.module.scss";

export default function Share(){

    let link = encodeURI( window.location.href );
    let twitter = `http://twitter.com/share?&url=${link}&text=JornalSudoeste`;
    let facebook = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
    let whatsapp = `https://api.whatsapp.com/send?text=JornalSudoeste%20${link}`;

    return(
        <>
            <div className={styles.compartilharDiv}>
                <h3> Compartilhe: </h3>
                <div>
                    <a href={facebook} target="_blank" className={styles.facebookButton}>
                        <img src="/images/redesSociaisfooter/ri_facebook-circle-fill (1).png" alt="" /> <h2></h2>
                    </a>
                    <a href={whatsapp} target="_blank" className={styles.whatsappButton}> 
                        <img src="/images/redesSociaisfooter/ic_baseline-whatsapp.png" alt="" /> <h2></h2>
                    </a>
                    <a href={twitter} target="_blank" className={styles.twitterButton}> 
                        <img src="/images/redesSociaisfooter/pajamas_twitter (1).png" alt="" /> <h2></h2>
                    </a>
                </div>
            </div>
        </>
    );
}