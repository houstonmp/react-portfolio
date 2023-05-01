import { useState, useEffect } from 'react';

import TitlePage from './assets/components/titlepage/TitlePage';
import SideBar from './assets/components/SideBar';
import AboutMe from './assets/components/aboutme/AboutMe'
import ImportantLinks from './assets/components/ImportantLinks';
import Portfolio from './assets/components/portfolio/Portfolio';
import './App.css'

let docHeight = 0;
let sectionHeight = 0;
let sectionNumber = 3;

function calculateSectionHeight() {
  var htmlElement = document.documentElement;
  var bodyElement = document.body;

  var height = Math.max(
    htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
    bodyElement.scrollHeight, bodyElement.offsetHeight
  );
  docHeight = height;
  sectionHeight = height / sectionNumber;
}

window.onload = calculateSectionHeight;

window.onresize = calculateSectionHeight;

function App() {
  let lastKnownScrollPosition = 0;
  let ticking = false;
  const [pageLocation, setLocation] = useState(0);
  const [shapeType, setShape] = useState({
    circle: "circle-0",
    triangle: "triangle-0",
    isDark: false
  });
  // const [changePageData, setPageData] = useState({
  //   shape: 0,
  //   link: 0,
  //   react: 0,
  // })

  function doSomething(scrollPos) {
    console.log("Mouse Location:", scrollPos, sectionHeight, `${Math.round(scrollPos / sectionHeight)}`)
    // Do something with the scroll position
    if (Math.round(scrollPos / sectionHeight) === (0 * sectionNumber)) {
      // console.log("Mouse Location:", scrollPos, sectionHeight, `${Math.round(scrollPos / sectionHeight)}`)
      setLocation(0); //page 1
    } else if (Math.round(scrollPos / sectionHeight) === (1 * sectionNumber)) {
      // console.log("Mouse Location:", scrollPos, sectionHeight, `${Math.round(scrollPos / sectionHeight)}`);

      setLocation(1);//page 2
    } else if (Math.round(scrollPos / sectionHeight) === (2 * sectionNumber)) {
      // console.log("Mouse Location:", scrollPos, sectionHeight, `${Math.round(scrollPos / sectionHeight)}`);
      setLocation(2);
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
        <TitlePage circleType={shapeType.circle} triangleType={shapeType.triangle} isShown={pageLocation} />
        <AboutMe />
        <Portfolio isShown={pageLocation} />
        <ImportantLinks isDark={shapeType.isDark} />
        <SideBar pageLocation={pageLocation} isDark={shapeType.isDark} />
      </div>
    </>
  )
}

export default App
