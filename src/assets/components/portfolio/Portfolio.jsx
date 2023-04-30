import styles from "./Portfolio.module.css";
import Shapes from "../shapes/Shapes"
import yeti from '../../img/Yeti.png';
import shark from '../../img/image 6.png';
import weight from '../../img/weight.png';
import tudor from '../../img/Tudo-r.png';
import meteor from '../../img/image 7.png';

const Portfolio = (props) => {
    const { circleType, triangleType } = props;

    return (
        <>
            <section className={styles.portfolio}>
                <div className={styles.carousel}>
                    <a href="https://yetijapan.com/" target="_blank">
                        <img src={yeti} alt="Yeti Japan" />
                    </a>
                    <a href="https://chimerical-puppy-f8d0d5.netlify.app/" target="_blank">
                        <img src={shark} alt="Pool Shark" />
                    </a>
                    <a href="https://adorable-twilight-fb881c.netlify.app/" target="_blank">
                        <img src={weight} alt="" />
                    </a>
                    <a href="https://lustrous-bublanina-b8b4b7.netlify.app/" target="_blank">
                        <img src={tudor} alt="" />
                    </a>
                    <a href="https://frabjous-biscuit-20fc2a.netlify.app/" target="_blank">
                        <img src={meteor} alt="" />
                    </a>

                </div>

                <Shapes circleType={circleType} triangleType={triangleType} />
            </section>
        </>
    );
}

export default Portfolio;