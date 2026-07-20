import styles from './Timeline.module.css';

const timeline = [
    { role: "Web Developer", org: "NativePath Llc.", range: "February 2025 - Present" },
    { role: "Sales Operations & Technical Support", org: "NEXCO Highway Solutions of America Inc.", range: "June 2024 – Sept 2024" },
    { role: "Volunteer Webmaster", org: "YETI Council, Yamanashi, Japan", range: "May 2020 – June 2022" },
    { role: "English Language Teacher", org: "Hokuto Board of Education, Yamanashi, Japan", range: "Aug 2018 – Aug 2023" },
];

const Timeline = () => {
    return (
        <section id={styles.timeline_body}>
            <div className={styles.panel}></div>

            <div className={styles.content}>
                <div className={styles.line}></div>
                <ol className={styles.list}>
                    {timeline.map((item, i) => (
                        <li className={styles.item} key={i}>
                            <span className={`${styles.dot} ${i === 0 ? styles.dotActive : ''}`}>
                                <span className={styles.dotMid}>
                                    <span className={styles.dotInner}></span>
                                </span>
                            </span>
                            <div className={styles.text}>
                                <p className={styles.role}>{item.role} —</p>
                                <p className={styles.org}>{item.org}</p>
                                <p className={styles.range}>{item.range}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Timeline;