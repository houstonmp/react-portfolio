import { useState, useRef, useEffect } from 'react';
import styles from "./Portfolio.module.css";
import yeti from '../../img/Yeti.png';
import shark from '../../img/poolshark.png';
import button from '../../img/Button.png'
import tudor from '../../img/tudor-preview.png';
import meteor from '../../img/meteor.png';
import fitpad from '../../img/FitPad.png';
import haDashboard from '../../img/haDashboard.png';
import {trackInterest} from '../../utils/gtm';

const projects = [
    { title: "FitPad", href: "https://successful-fog-b5ad98.netlify.app/signin", img: fitpad, alt: "FitPad - Health Tracker", description: "FitPad is a health and wellness app built to contain all tracking data necessary to track & lose weight. With a simple overview and built-in modules, you can view and customize what data you need to see, all in one place. It also features a recipe book and USDA macro connection, so you can store and identify the macros that you need.", techStack: "React.js, Redux, Chart.js" },
    { title: "YETI Japan", href: "/yeti/", img: yeti, alt: "Yeti Japan", description: "A full platform rebuild for a 200+ active member English teacher community across Yamanashi, Japan. Includes a custom interactive SVG map so members could learn more about the different parts of the region, migrated from legacy architecture to a modern, CDN-backed setup for reliable local hosting. Platform served the organization through 2024. The organization ultimately opted not to continue maintaining a standalone site, moving activity to informal channels instead.", techStack: "Vanilla JS/HTML/CSS, PHP (Bludit CMS)" },
    { title: "PoolShark", href: "https://chimerical-puppy-f8d0d5.netlify.app/", img: shark, alt: "Pool Shark - A Classic game of Tic-Tac-Toe", description: "Poolshark is a tic-tac-toe game built around a seafloor aesthetic. A physics engine drives dozens of floating dots across the board, giving the whole game a slow, drifting underwater feel instead of a static grid.", techStack: "React.js" },
    { title: "Button Wrangler", href: "https://merry-unicorn-c978d5.netlify.app/", img: button, alt: "Button Wrangler - A Hold the Button Game", description: "Button Wrangler is a 'Hold the Button' style game based on the beloved early 2000s game of the same name. Hold onto the button as it drifts randomly around the screen and changes shape and color. See how long you can hold on!", techStack: "React.js, TailwindCSS" },
    { title: "Tudo[r]", href: "https://tudor-app-b8b4b7.netlify.app/", img: tudor, alt: "Tudor - Ye old todo list", description: "A simple and easy to use Todo list, set in the era of Tudor (Get it haha), England. This app features a historically inspired color-palette and saves all data locally to localStorage for local and ongoing control.", techStack: "React.js" },
    { title: "🏗️ Home Assistant Dashboard", href: "https://www.figma.com/proto/B62C20HMWzVvb6ca5Gy6Yj/Upcoming-Projects?node-id=3-3&m=draw&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&t=L9sGqLAUzq6x8R2O-1", img: haDashboard, alt: "Upcoming Project | Home Assistant Dashboard", description: "This tool combines the fluidity of a canvas dashboard with the power of home assistant. Map out and access your devices and automations from one location in a visual manner.", techStack: "Figma (UI Render), To be built in React.js" },
    // { title: "Meteor Weather", href: "https://frabjous-biscuit-20fc2a.netlify.app/", img: meteor, alt: "", badge: "AI" },
];

const Arrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow}>
        <path d="M5 3L19 12L5 21V3Z" fill="#CE1B4B" rx="3"/>
    </svg>
);

const InfoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
        <line x1="12" y1="11" x2="12" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="1" fill="white"/>
    </svg>
);

const Portfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [openInfoIndex, setOpenInfoIndex] = useState(null);
    const carouselRef = useRef(null);
    const isProgrammaticScroll = useRef(false);

    const scrollToProject = (index, title) => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        isProgrammaticScroll.current = true;
        const itemWidth = carousel.offsetWidth;
        carousel.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
        setActiveIndex(index);
        trackInterest(title, 'project-select');
    };

    const handleCarouselScroll = () => {
        if (isProgrammaticScroll.current) return;
        const carousel = carouselRef.current;
        if (!carousel) return;
        const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
        if (index !== activeIndex) {
            setActiveIndex(index);
            trackInterest(projects[index].title, 'project-scroll');
        }
    };

    const toggleInfo = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenInfoIndex(prev => (prev === index ? null : index));
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        const handleScrollEnd = () => { isProgrammaticScroll.current = false; };
        carousel.addEventListener('scrollend', handleScrollEnd);
        return () => carousel.removeEventListener('scrollend', handleScrollEnd);
    }, []);

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
                            <button className={styles.projectBtn} onClick={() => scrollToProject(i)}>
                                {p.title}
                                {p.badge && <span className={styles.badge}>{p.badge}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.carousel} ref={carouselRef} onScroll={handleCarouselScroll}>
                {projects.map((p, i) => (
                    <a key={i} href={p.href} target="_blank" onClick={() => trackInterest(p.title, 'project-navigation', { url: p.href })}>
                        <button className={styles.infoBtn} onClick={(e) => toggleInfo(e, i)} aria-label="Toggle project info">
                            <InfoIcon />
                        </button>
                        <aside className={`${styles.projectDesc} ${openInfoIndex === i ? styles.infoOpen : ''}`}>
                            <h2>{p.title}</h2>
                            <p>{p.alt}</p>
                            <hr className={styles.separator}></hr>
                            <p>{p.description}</p>
                            <p>Tech Stack: {p.techStack}</p>
                        </aside>
                        <img src={p.img} alt={p.alt} />
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;