import Header from "app/Header";
import styles from '../githubdevs/page.module.css';

export default function githubdevs () {

    return (
        <>
            <Header />

            <h1 className={styles.h1}>GitHub dos Desenvolvedores</h1>

            <div className={styles.githubdevs}>
                <p><a href="https://github.com/hilariogrossi" target="_blanck">Hilário Grossi de Oliveira</a></p>
                <p><a href="https://github.com/Luis-GTHBCD" target="_blanck">Luís Gustavo Souza Lima</a></p>
                <p><a href="https://github.com/Thayna-Zacharias" target="_blanck">Thayná Zacharias</a></p>
                <p><a href="https://github.com/maurochavesjr/" target="_blanck">Mauro Chaves</a></p>
                

            </div>

        </>

    )

}
