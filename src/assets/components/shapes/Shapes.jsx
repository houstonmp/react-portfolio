import Triangle from "./Triangles"
import Circle from "./Circles"
import Square from './Squares';

const Shapes = (props) => {
    const { triangleType, circleType } = props;


    return (
        <>

            <Triangle triangleType="triangle_type_one" trianglePlace={triangleType} />
            <Circle circleType="circle_type_one" circlePlace={circleType} />
            {(props.pageLocation === 2) && <Square squareType="square_type_one" squarePlace="square-2" />}
            {(props.pageLocation === 2) && <Triangle triangleType="triangle_type_one" trianglePlace="triangle-3" />}
            {/* <Triangle triangleType="triangle_type_one" trianglePlace="triangle-1" />
            <Triangle triangleType="triangle_type_one" trianglePlace="triangle-2" />
            <Triangle triangleType="triangle_type_one" trianglePlace="triangle-3" /> */}
        </>
    );
}

export default Shapes;