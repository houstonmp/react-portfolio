import styles from './ImportantLinks.module.css';
import Github from '../img/Github'
import LinkedIn from '../img/LinkedIn'

const ImportantLinks = (props) => {
    const { isDark } = props;
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 800;
    const effectiveDark = isMobile ? false : isDark;

    return (
        <div className={styles.links}>
            <Github color={effectiveDark ? '#0085FF' : '#fff'} />
            <LinkedIn letterColor={effectiveDark ? '#0085FF' : '#fff'} bgcolor={effectiveDark ? '#FFF' : "#0085FF"} />
        </div>
    );
}

export default ImportantLinks;