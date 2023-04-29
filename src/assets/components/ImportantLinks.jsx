import styles from './ImportantLinks.module.css';
import Github from '../img/Github'
import LinkedIn from '../img/LinkedIn'

const SideBar = () => {
    return (
        <>
            <div className={styles.links}>
                <Github color="#fff" />
                <LinkedIn letterColor="#fff" bgcolor="#0085FF" />
            </div>
        </>
    );
}

export default SideBar;