import styles from './Input.module.css';

const Input = (props) => {
    return (
        <div className={styles.container}>
            <label className={styles.name}>{props.name}</label>
            <input type={props.type} placeholder={props.name} className={styles.entrada} />
        </div>
    );
}

export default Input;