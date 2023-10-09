// import styles from "./Information.module.css";
import styles from '../aboutme/AboutMe.module.css';
import classes from '../aboutme/Information.module.css'

const TechStack = () => {
    return (
        <>
            <section id={styles.am_body}>
                <h1 className={classes.title}>My Tech Stack</h1>
            </section>
        </>
    );
}

export default TechStack;