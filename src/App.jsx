import { useState, useEffect } from 'react';

import TitlePage from './assets/components/titlepage/TitlePage';
import SideBar from './assets/components/SideBar';
import AboutMe from './assets/components/aboutme/AboutMe'
import ImportantLinks from './assets/components/ImportantLinks';
import './App.css'

let docHeight = 0;
let sectionHeight = 0;

window.onload = () => {
  docHeight = document.body.scrollHeight;
  sectionHeight = docHeight / 2;
};

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
    // Do something with the scroll position
    if (scrollPos > 0 && scrollPos < sectionHeight) {
      console.log("Setting pageLocation:", 0);
      setLocation(0); //page 1
    } else if (scrollPos > (sectionHeight * 1)) {
      console.log("Setting pageLocation:", 1);
      setLocation(1);//page 2
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
        <ImportantLinks isDark={shapeType.isDark} />
        <SideBar pageLocation={pageLocation} isDark={shapeType.isDark} />
      </div>
    </>
  )
}

export default App
