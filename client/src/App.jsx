import { useState, useEffect } from 'react';

import TitlePage from './assets/components/titlepage/TitlePage';
import SideBar from './assets/components/SideBar';
import AboutMe from './assets/components/aboutme/AboutMe'
import ImportantLinks from './assets/components/ImportantLinks';
import Portfolio from './assets/components/portfolio/Portfolio';
import Shapes from './assets/components/shapes/Shapes'
import ContactForm from './assets/components/contact/ContactForm'
import './App.css'
// In React, we typically handle changing variables with hooks like "useState"
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
    // I'm assuming this variable is being used in different places to set certain styles on
    // elements. But to get it to the place it needs to go, it needs to be passed down as "props"
    // multiple times, right? This is something called "prop drilling" and can make state management
    // quite difficult. Instead, this would be a great use case for useContext! It's a way of storing
    // reactive state and passing it around without "prop drilling". Take a look at the
    // "themeContext.jsx" file I've added for an example.
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
  // While this might work in a vanilla js setting, handling DOM measurements like this can be
  // problematic in React. Remember that "App" is actually a function, and it runs every time
  // React thinks it's a good idea to! Because of that the "App" function will actually run
  // multiple times, which means each of these window handlers will get set over and over again.
  // Instead of this, I would take a look at the ResizeObserver API if you want to measure changes
  // in the document's size.
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
      // If/else statements can be tricky to maintain. What if you end up adding a new pageLocation
      // in the middle? Or at the end? It can be cumbersome to add additional "else if" statements,
      // so in this case I recommend using a different data structure. For example, if you create an
      // array that holds all the information related to each page, you could use the "pageLocation"
      // to index into that array like so:
      // 
      // const pageShapeSettings = [
      //   {
      //     circle: "circle-0",
      //     triangle: "triangle-0",
      //     isDark: true,
      //   },
      //   ...
      // ]
      // 
      // Then, inside the useEffect, you could check to make sure that "pageLocation" is a valid
      // page number and use it to grab the appropriate settings:
      // 
      // if (pageLocation >=0 && pageLocation < pageShapeSettings.length) {
      //   setShape(pageShapeSettings[pageLocation])
      // }
      // 
      // The nice thing about this is that adding more page settings is as easy as extending the
      // "pageShapeSettings" array.
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

    // I would avoid requestAnimationFrame for cases like this. It's typically reserved for when
    // you are animating elements.
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
        {/* If I'm understanding the logic above correctly, "isDisplay" is checking the viewport
        // width and hiding elements if it's under 800px. This can be pretty easy to achieve in
        // CSS with media queries, and I'm a big advocate for handling styles with CSS and
        // functionality with Javascript. */}
        {isDisplay && <Shapes circleType={shapeType.circle} triangleType={shapeType.triangle} pageLocation={pageLocation} />}
        {isDisplay && <SideBar id="sideBar" pageLocation={pageLocation} isDark={shapeType.isDark} scrollLength={sectionHeight} sectionNumber={sectionNumber} />}
        <ContactForm />

      </div>
    </>
  )
}

export default App
