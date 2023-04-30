import styles from './SideBar.module.css';

const SideBar = (props) => {
    const { pageLocation, isDark } = props;
    return (
        <>
            <div className={styles.side_bar}>
                <span className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 0) && styles.active}`}></span>
                <span className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 1) && styles.active}`}></span>
                <span className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 2) && styles.active}`}></span>
                <span className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 3) && styles.active}`}></span>
                <span className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 4) && styles.active}`}></span>
                <span className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 5) && styles.active}`}></span>
            </div >
        </>
    );
}

export default SideBar;