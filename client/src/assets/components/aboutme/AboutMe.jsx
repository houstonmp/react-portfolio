import Shapes from '../shapes/Shapes';
import ImportantLinks from '../ImportantLinks';
import Information from './Information';
import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <>
            <section id={styles.am_body}>
                <Information />
            </section>
        </>
    );
}

export default AboutMe;