import styles from './ImportantLinks.module.css';
import Github from '../img/Github'
import LinkedIn from '../img/LinkedIn'

const ImportantLinks = (props) => {
    const { isDark } = props;
    return (
        <>
            <div className={styles.links}>
                <Github color={isDark ? '#0085FF' : '#fff'} />
                <LinkedIn letterColor={isDark ? '#0085FF' : '#fff'} bgcolor={isDark ? '#FFF' : "#0085FF"} />
            </div>
        </>
    );
}

export default ImportantLinks;