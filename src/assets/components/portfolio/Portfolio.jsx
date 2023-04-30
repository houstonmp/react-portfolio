import styles from "./Portfolio.module.css";
import Shapes from "../shapes/Shapes"

const Portfolio = (props) => {
    const { circleType, triangleType } = props;

    return (
        <>
            <section className={styles.portfolio}>
                <div className={styles.carousel}>
                    <a href="https://yetijapan.com/" target="_blank">
                        <img src="/assets/img/Yeti.png" alt="Yeti Japan" />
                    </a>
                    <a href="https://chimerical-puppy-f8d0d5.netlify.app/" target="_blank">
                        <img src="./assets/img/image 6.png" alt="Pool Shark" />
                    </a>
                    <a href="https://adorable-twilight-fb881c.netlify.app/" target="_blank">
                        <img src="assets/img/weight.png" alt="" />
                    </a>
                    <a href="https://lustrous-bublanina-b8b4b7.netlify.app/" target="_blank">
                        <img src="./assets/img/Tudo-r.png" alt="" />
                    </a>
                    <a href="https://frabjous-biscuit-20fc2a.netlify.app/" target="_blank">
                        <img src="./assets/img/image 7.png" alt="" />
                    </a>

                </div>

                <Shapes circleType={circleType} triangleType={triangleType} />
            </section>
        </>
    );
}

export default Portfolio;