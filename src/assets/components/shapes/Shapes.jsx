import Triangle from "./Triangles"
import Circle from "./Circles"

const Shapes = () => {
    return (
        <>
            <Triangle triangleType="triangle_type_one" trianglePlace="triangle-1" />
            <Circle circleType="circle_type_one" circlePlace="circle-1" />
            {/* <Triangle triangleType="triangle_type_one" trianglePlace="triangle-1" />
            <Triangle triangleType="triangle_type_one" trianglePlace="triangle-2" />
            <Triangle triangleType="triangle_type_one" trianglePlace="triangle-3" /> */}
        </>
    );
}

export default Shapes;