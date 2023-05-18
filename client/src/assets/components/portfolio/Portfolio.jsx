import styles from "./Portfolio.module.css";
import yeti from '../../img/Yeti.png';
import shark from '../../img/image 6.png';
import weight from '../../img/weight.png';
import tudor from '../../img/Tudo-r.png';
import meteor from '../../img/image 7.png';
import SideBar from "../SideBar";

const Portfolio = (props) => {
    // document.getElementsByClassName('.carousel').scrollWidth;

    return (
        <>
            <section className={styles.portfolio}>
                <h1 className={styles.portfolioTitle}>Portfolio</h1>
                <div className={styles.carousel}>
                    <a href="https://yetijapan.com/" target="_blank">
                        <h2>YETI Japan</h2>
                        <img src={yeti} alt="Yeti Japan" />
                    </a>
                    <a href="https://chimerical-puppy-f8d0d5.netlify.app/" target="_blank">
                        <h2>PoolShark</h2>
                        <img src={shark} alt="Pool Shark" />
                    </a>
                    <a href="https://adorable-twilight-fb881c.netlify.app/" target="_blank">
                        <h2>Health Tracker</h2>
                        <img src={weight} alt="" />
                    </a>
                    <a href="https://lustrous-bublanina-b8b4b7.netlify.app/" target="_blank">
                        <h2>Tudo[r]</h2>
                        <img src={tudor} alt="" />
                    </a>
                    <a href="https://frabjous-biscuit-20fc2a.netlify.app/" target="_blank">
                        <h2>Meteor Weather</h2>
                        <img src={meteor} alt="" />
                    </a>

                </div>
                {/* <SideBar isDark={true} type="horizontal" /> */}

                {/* <Shapes circleType={circleType} triangleType={triangleType} /> */}
            </section>
        </>
    );
}

export default Portfolio;