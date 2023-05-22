import { useState, useEffect } from 'react';

import TitlePage from './assets/components/titlepage/TitlePage';
import SideBar from './assets/components/SideBar';
import AboutMe from './assets/components/aboutme/AboutMe'
import ImportantLinks from './assets/components/ImportantLinks';
import Portfolio from './assets/components/portfolio/Portfolio';
import Shapes from './assets/components/shapes/Shapes'
import ContactForm from './assets/components/contact/ContactForm'
import './App.css'

let docHeight = 0;
let sectionHeight = 0;
let sectionNumber = 4;


function App() {
  let lastKnownScrollPosition = 0;
  let ticking = false;
  const [pageLocation, setLocation] = useState(0);
  const [shapeType, setShape] = useState({
    circle: "circle-0",
    triangle: "triangle-0",
    isDark: false
  });
  const [isDisplay, setDisplay] = useState(false);

  function calculateSectionHeight() {
    var htmlElement = document.documentElement;
    var bodyElement = document.body;

    var height = Math.max(
      htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
      bodyElement.scrollHeight, bodyElement.offsetHeight
    );
    docHeight = height;
    sectionHeight = height / sectionNumber;

    let viewWidth = document.body.getBoundingClientRect().width;
    console.log("Width:", viewWidth);
    if (viewWidth > 800) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }

  window.onload = calculateSectionHeight;

  window.onresize = calculateSectionHeight;
  // const [changePageData, setPageData] = useState({
  //   shape: 0,
  //   link: 0,
  //   react: 0,
  // })

  function doSomething(scrollPos) {
    // Do something with the scroll position
    if (Math.round(scrollPos / sectionHeight) === (0 * sectionNumber)) {
      setLocation(0); //page 1
    } else if (Math.round(scrollPos / sectionHeight) === (1 * sectionNumber)) {
      setLocation(1);//page 2
    } else if (Math.round(scrollPos / sectionHeight) === (2 * sectionNumber)) {
      setLocation(2);
    }
    else if (Math.round(scrollPos / sectionHeight) === (3 * sectionNumber)) {
      setLocation(3);
    }
  }


  useEffect(
    () => {
      if (pageLocation === 0) {
        console.log("Setting Shape:", 0);
        setShape({
          circle: "circle-0",
          triangle: "triangle-0",
          isDark: false
        })

      } else if (pageLocation === 1) {
        console.log("Setting Shape:", 1);
        setShape({
          circle: "circle-1",
          triangle: "triangle-1",
          isDark: true
        })
      } else if (pageLocation === 2) {
        setShape({
          circle: "circle-2",
          triangle: "triangle-2",
          isDark: true
        });
      }
      else if (pageLocation === 3) {
        setShape({
          circle: "circle-2",
          triangle: "triangle-2",
          isDark: false
        });
      }
    }
    , [pageLocation]
  )

  const scrollHandler = (event) => {
    lastKnownScrollPosition = event.target.scrollTop || document.body.scrollTop;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  }

  return (
    <>
      <div className="container" onScroll={scrollHandler}>
        <TitlePage pageLocation={pageLocation} />
        <AboutMe />
        <Portfolio />
        <ImportantLinks isDark={shapeType.isDark} />
        {isDisplay && <Shapes circleType={shapeType.circle} triangleType={shapeType.triangle} pageLocation={pageLocation} />}
        {isDisplay && <SideBar id="sideBar" pageLocation={pageLocation} isDark={shapeType.isDark} scrollLength={sectionHeight} sectionNumber={sectionNumber} />}
        <ContactForm />

      </div>
    </>
  )
}

export default App
