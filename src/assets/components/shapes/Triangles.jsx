import "./Triangles.css"

const Triangle = (props) => {
    const { triangleType, trianglePlace } = props;

    return (
        <div className={`${triangleType} ${trianglePlace}`}>
        </div >
    );
}

export default Triangle;