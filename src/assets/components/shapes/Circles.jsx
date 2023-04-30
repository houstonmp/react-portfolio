import "./Circles.css"

const Circle = (props) => {
    const { circleType, circlePlace } = props;

    return (
        <svg className={`${circleType} ${circlePlace}`} viewBox="0 0 91 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="29" cy="45" r="29" fill="white" />
            <circle cx="77.5" cy="13.5" r="13.5" fill="white" />
        </svg>


        // <div className={`${triangleType} ${trianglePlace}`}>
        // </div >
    );
}

export default Circle;