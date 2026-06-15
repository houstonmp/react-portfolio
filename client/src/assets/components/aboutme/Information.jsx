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
                        "Welcome! I'm Matthew, a Web Developer based in Dallas-Fort Worth, specializing in user-focused web applications. With experience in React.js, Google Firebase, CMS, and CRM management, I craft dynamic tools and websites. Previously, I honed my technical skills as a webmaster in Japan. I bring technical expertise and a global perspective to every project."
                    </p>
                    <div className={styles.blueBar}></div>
                </div>

            </section>
        </>
    );

}

export default Information;