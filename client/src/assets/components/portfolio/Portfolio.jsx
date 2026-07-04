import { useState, useRef } from 'react';
import styles from "./Portfolio.module.css";
import yeti from '../../img/Yeti.png';
import shark from '../../img/image 6.png';
import button from '../../img/Button.png'
import tudor from '../../img/tudor-preview.png';
import meteor from '../../img/image 7.png';
import fitpad from '../../img/FitPad.png';

const projects = [
    { title: "FitPad Health App", href: "https://successful-fog-b5ad98.netlify.app/signin", img: fitpad, alt: "FitPad" },
    { title: "YETI Japan", href: "/yeti/", img: yeti, alt: "Yeti Japan" },
    { title: "PoolShark", href: "https://chimerical-puppy-f8d0d5.netlify.app/", img: shark, alt: "Pool Shark - A Classic game of Tic-Tac-Toe" },
    { title: "Button Wrangler", href: "https://merry-unicorn-c978d5.netlify.app/", img: button, alt: "Button Wrangler - A Hold the Button Game" },
    { title: "Tudo[r]", href: "https://tudor-app-b8b4b7.netlify.app/", img: tudor, alt: "Tudor - Ye old todo list" },
    // { title: "Meteor Weather", href: "https://frabjous-biscuit-20fc2a.netlify.app/", img: meteor, alt: "", badge: "AI" },
];

const Arrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow}>
        <path d="M5 3L19 12L5 21V3Z" fill="#CE1B4B" rx="3"/>
    </svg>
);

const Portfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const scrollToProject = (index) => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        const itemWidth = carousel.offsetWidth;
        carousel.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
        setActiveIndex(index);
    };

    const handleCarouselScroll = () => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
        setActiveIndex(index);
    };

    return (
        <section className={styles.portfolio}>
            <div className={styles.sidebar}>
                <h1 className={styles.portfolioTitle}>My Work</h1>
                <ul className={styles.projectList}>
                    {projects.map((p, i) => (
                        <li key={i} className={i === activeIndex ? styles.active : ''}>
                            <div className={styles.arrowSlot}>
                                {i === activeIndex && <Arrow />}
                            </div>
                            <button
                                className={styles.projectBtn}
                                onClick={() => scrollToProject(i)}
                            >
                                {p.title}
                                {p.badge && <span className={styles.badge}>{p.badge}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.carousel} ref={carouselRef} onScroll={handleCarouselScroll}>
                {projects.map((p, i) => (
                    <a key={i} href={p.href} target="_blank">
                        <h2>{p.title}</h2>
                        <img src={p.img} alt={p.alt} />
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;