import styles from "./Information.module.css";
import profileImg from "../../img/profile.png";

const Information = () => {

    return (
        <>
            <section className={styles.information}>
                <h1 className={styles.title}>About Me</h1>
                <img src={profileImg} alt="Hi, I'm Matthew!" className={styles.info_img} />
                <div className={styles.info_text}>
                    <p>
                        I'm a self-taught developer in the Dallas-Fort Worth Metroplex who values communication, perseverence, and life long-learning.
                    </p>
                    <div className={styles.blueBar}></div>
                </div>

            </section>
        </>
    );

}

export default Information;