import Shapes from '../shapes/Shapes';
import ImportantLinks from '../ImportantLinks';
import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <>
            <section id={styles.am_body}>
                <Shapes />
                <ImportantLinks />
            </section>
        </>
    );
}

export default AboutMe;