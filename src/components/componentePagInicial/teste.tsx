// import { useState, useEffect } from "react";
// import styles from "./componente.module.scss";

// import imagejornal2 from "../../assets/imageojornal2.jpeg"
// import Image from "next/image";

// export default function LastNewsHome() {

//     const [dados, setDados] = useState([]);
//     const [load, setLoad] = useState(false);

//     useEffect(() => {
//         fetch('api/controller/buscarBanco/', {
//             method: 'POST',
//             body: JSON.stringify({ 'busca': 'noticias' }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(response => response.json()).then(data => {
//             setDados(data.reverse());
//             setLoad(true);
//         });
//     }, []);
    
//     if (load && window.innerWidth > 1250)
//         return (
//             <>
//                 <div className="md:flex md:items-end md:w-11/12 md:m-auto">
//                     <div className="w-[50%] h-3/4 rounded-lg hover:opacity-95">
//                         <a href={`/news/${dados[0].titulo}`} className="w-full min-w-[35vw] mb-7 flex items-end">
//                             <img className="w-[40%] rounded-lg object-cover brightness-[60%] absolute"
//                                 src={`data:image;base64, ${Buffer.from(dados[0].imagem.data).toString('base64')}`}
//                                 alt=""
//                             />
//                             <h5 className="mb-2 ml-2 mr-[5%] max-w-[95%] min-w-[60vw] text-[1.4em] font-bold tracking-tight text-white-100 dark:text-white relative font-bold">
//                                 {(dados[0].titulo).substr(0,43)}...
//                             </h5>
//                         </a>
//                     </div>

//                     <div className="grid grid-cols-2 gap-y-4 gap-x-24 w-[48%]">
//                         {dados.map((dados, key) => (
//                             key < 1 ?
//                                null
//                                 :
//                                 key < 5 ?

//                                     <div className="mt-32 min-w-[16vw] max-w-[16vw] rounded-lg hover:opacity-95 ">
//                                         <a href={`/news/${dados.titulo}`} className="flex items-end">
//                                             <img className="w-[30%] max-w-[24vw] max-h-[14vw] min-h-[14vw] rounded-lg brightness-[60%] absolute z-index-0"
//                                                 src={`data:image;base64, ${Buffer.from(dados.imagem.data).toString('base64')}`} 
//                                                 alt=""
//                                             />
//                                             <div className="mb-2 text-lg font-bold tracking-tight text-white-100 dark:text-white font-bold relative">
//                                                 <h4 className="max-w-[95%] min-w-[20vw] mt-4 ml-1 font">{(dados.titulo).substr(0,27)}...</h4>
//                                             </div>
//                                         </a>
//                                     </div>
//                                     : null
//                         ))}
//                     </div>
//                 </div>
//             </>
//         );
//     else if(load){
//         return (
//             <>
//                 <div className="md:flex md:items-center justify-center flex-col md:w-4/12 mt-72">
//                     <div className="w-full mb-28">
//                         <a href={`/news/${dados[0].titulo}`} className="w-full min-w-[35vw] mb-7 flex items-end">
//                             <img className="w-[90vw] max-w-[70%] rounded-lg object-cover brightness-[60%] absolute"
//                                 src={`data:image;base64, ${Buffer.from(dados[0].imagem.data).toString('base64')}`}
//                                 alt=""
//                             />
//                             <h5 className="mb-2 ml-2 mr-[5%] max-w-[95%] min-w-[70vw] text-2xl font-bold tracking-tight text-white-100 dark:text-white relative font-light">
//                                 {(dados[0].titulo).substr(0,43)}...
//                             </h5>
//                         </a>
//                     </div>

//                     <div className="grid grid-cols-1 gap-y-2 gap-x-80 w-[48%]">
//                         {dados.map((dados, key) => (
//                             key < 1 ?
//                                null
//                                 :
//                                 key < 5 ?

//                                     <div className="mt-28 mb-24 min-w-[30vw] rounded-lg hover:opacity-95 ">
//                                         <a href={`/news/${dados.titulo}`} className="flex items-end min-h-[25vh]">
//                                             <img className="w-[70vw] max-w-[70%] rounded-lg brightness-[60%] absolute z-index-0"
//                                                 src={`data:image;base64, ${Buffer.from(dados.imagem.data).toString('base64')}`} 
//                                                 alt=""
//                                             />
//                                             <div className="mb-2 text-lg font-bold tracking-tight ml-1 text-white-100 dark:text-white font-light relative min-w-[65vw]">
//                                                 <h4>{(dados.titulo).substr(0,27)}...</h4>
//                                             </div>
//                                         </a>
//                                     </div>
//                                     : null
//                         ))}
//                     </div>
//                 </div>
//             </>
//         );
//     }
//     else {
//         return (
//             <>
//                 <div className={styles.mainComponente}>

//                 </div>
//             </>
//         );
//     }
// }
