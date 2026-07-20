import styles from "./Information.module.css";
import profileImg from "../../img/profile.png";
import ImportantLinks from '../ImportantLinks';

const traits = [
    { label: "I'm a builder", text: "whether it's web tools, 3D-printed solutions, or game dev projects. I enjoy tinkering and creating new things" },
    { label: "I'm a learner", text: "I enjoy investing in myself and toolkit. I'm currently learning C# as a hobby through tactical RPG development while working as a Web Developer at NativePath." },
    { label: "I'm a pioneer", text: "I spent 5 years teaching English in Japan before shifting to development. I bring an adventurous and inquisitive thought process to every conversation." },
    { label: "I'm an engineer", text: "I solve problems by identifying inefficiencies and building tools to fix them." },
];

const Information = () => {
    return (
        <section className={styles.information}>
            <img src={profileImg} alt="Matthew Houston" className={styles.photo} />

            <div className={styles.traitGrid}>
                {traits.map((t, i) => (
                    <p className={styles.trait} key={i}>
                        <span className={styles.traitLabel}>{t.label}—</span>
                        {t.text}
                    </p>
                ))}
            </div>

            <div className={styles.socialLinks}>
                <ImportantLinks />
            </div>
        </section>
    );
};

export default Information;