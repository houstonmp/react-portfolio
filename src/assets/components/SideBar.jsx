import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <>
            <div className={styles.side_bar}>
                <span className={`${styles.dot} ${styles.active}`}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>
        </>
    );
}

export default SideBar;