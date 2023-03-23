import styles from './button.module.css';

export const BotonAzul = (props) => {
    return (
        <button className={styles.contenedor} onClick={props.onClick}>{props.texto}</button>
    );
}

export const BotonVerde = (props) => {
    return (
        <button className={styles.contenedor} onClick={props.onClick}>{props.texto}</button>
    );
}

export const BotonRojo = (props) => {
    return (
        <button className={styles.contenedor} onClick={props.onClick}>{props.texto}</button>
    );
}