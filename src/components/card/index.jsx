import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
function Card({ tamanho, publico, marca, cor, preco, modelo, imagem , descricao, ativo}) {
    return (
        <section className={styles.card}>

            <div className={styles.title}>
                <h1>{modelo}</h1>
                <div className={styles.color} style={{ backgroundColor: cor }}></div>
                {ativo && <div className={styles.status} ><p>new!</p></div>}
            </div>
            <div className={styles.divimage}>
                <img src={imagem} alt={modelo} className={styles.imagem} />
                <div className={styles.details}>
                    <h4>{marca}</h4>
                    <p className={styles.description}>{descricao}</p>
                    
                </div>
            </div>
            <div className={styles.test}>
                <p className={styles.tamanhos}>TAMANHOS DISPONÍVEIS: {tamanho}</p>
                <p>{publico}</p>
                <h3 className={styles.preco}>R$ {preco}</h3>
            </div>
        </section>
    );
}

export default Card;
