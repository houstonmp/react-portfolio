import styles from "./SideBar.module.css";

const SideBar = (props) => {
  const { pageLocation, isDark, scrollLength, type, id, sectionNumber } = props;

  const clickHandler = (event) => {
        // In React, we usually use the useRef hook to get access to DOM nodes. But in this case,
        // I think a lot of this work can be simplified by just using the "event" object more.
        // Here, you can use "event.target.parentElement" to get access to the ".container" you are
        // looking for.
        const spanList = document.querySelector(`#${id}`).children;
        const container = document.querySelector('.container');
        let targetValue = "";
        // If you pass the page index in directly like I mention below, you can get the targetValue
        // without having to loop through looking for it.
        for (let i = 0; i < spanList.length; i++) {
            if (event.target === spanList[i]) {
                targetValue = i;
            }
        }

        let scrollValue = targetValue * scrollLength * sectionNumber;
        console.log('Scrolling:', scrollValue, targetValue);
        container.scrollTo({
            top: scrollValue,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div id={id} className={`${styles.side_bar} ${type && styles.horizontal}`}>
                {/* When coding, we love looking for ways to make computers do work for us. 
                In this case, there's a lot of manual input. We can simpliy that with an array!
                    
                First define this "pageLocations" array up outside of the return statement. (Or better
                yet, reuse the pageShapeSettings array I mentioned in App.jsx):
                    
                const pageLocations = [0, 1, 2, 3]
                    
                Then, use that with the map function to replace all the manual "span" elements: 
                    
                {pageLocations.map((pageLocation) => {
                    return (
                        <span key={pageLocation} onClick={(e) => handleClick(e, pageLocation)} {...otherProps}/>
                    )
                })}
                
                This way, it'll be really easy to add more pages later if you want! Further more,
                this lets you pass in the pageLocation directly, instead of having to loop through
                and find the index.

                */}
                <span value="0" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 0) && styles.active}`}></span>
                <span value="1" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 1) && styles.active}`}></span>
                <span value="2" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 2) && styles.active}`}></span>
                <span value="3" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 3) && styles.active}`}></span>
                {/* <span value="4" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 4) && styles.active}`}></span>
                <span value="5" onClick={clickHandler} className={`${styles.dot} ${isDark ? styles.dark : styles.light} ${(pageLocation === 5) && styles.active}`}></span> */}
            </div >
        </>
    );
}

export default SideBar;