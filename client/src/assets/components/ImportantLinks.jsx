import styles from './ImportantLinks.module.css';
import Github from '../img/Github'
import LinkedIn from '../img/LinkedIn'

const ImportantLinks = (props) => {
    // If using a React context like I mentioned in App.jsx, you could just get rid of "props" and
    // use this:
    // const { isDark } = useThemeContext();
    const { isDark } = props;

    // Also, to make the code a little more "DRY" (don't repreat yourself), you can save a few
    // variables for the textColor and bgColor:
    // 
    // const textColor = isDark ? "#0085FF" : "#FFF"
    // const bColor = isDark ? "#FFF" : "#0085FF"
    // 
    // Now, if you decide to extend these links with more social media links, you don't have to
    // write `isDark ? "..." : "..."`, you can just use the variables.
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