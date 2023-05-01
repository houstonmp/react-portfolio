import styles from './SideBar.module.css';

const SideBar = (props) => {
    const { pageLocation, isDark, scrollLength, type, id, sectionNumber } = props;

    const clickHandler = (event) => {
        const spanList = document.querySelector(`#${id}`).children;
        const container = document.querySelector('.container');
        let targetValue = "";

        for (let i = 0; i < spanList.length; i++) {
            if (event.target === spanList[i]) {
                targetValue = i;
            }
        }

        let scrollValue = targetValue * scrollLength * sectionNumber;
        console.log('Scrolling:', scrollValue, targetValue);
        container.scrollTo({
            top: scrollValue,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div id={id} className={`${styles.side_bar} ${type && styles.horizontal}`}>
                <span value="0" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 0) && styles.active}`}></span>
                <span value="1" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 1) && styles.active}`}></span>
                <span value="2" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 2) && styles.active}`}></span>
                <span value="3" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 3) && styles.active}`}></span>
                {/* <span value="4" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 4) && styles.active}`}></span>
                <span value="5" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 5) && styles.active}`}></span> */}
            </div >
        </>
    );
}

export default SideBar;