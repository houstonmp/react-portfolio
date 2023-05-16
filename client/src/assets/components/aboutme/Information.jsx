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
                        "Howdy! I'm a spirited Junior Developer dedicated to crafting captivating and user-friendly websites. I'm back in the Dallas-Fort Worth area after several years of teaching English in Yamanashi, Japan where I honed my skills in Japanese and picked up Front End Technologies. When I'm not coding, you'll find me drawing or working on exciting projects. This website showcases my skills, projects, and achievements from the past couple of years. Let's create something awesome together!"
                    </p>
                    <div className={styles.blueBar}></div>
                </div>

            </section>
        </>
    );

}

export default Information;