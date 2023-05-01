import "./Triangles.css"

const Triangle = (props) => {
    const { triangleType, trianglePlace } = props;

    return (
        <svg className={`${triangleType} ${trianglePlace}`} viewBox="0 0 67 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.7712 20.2288L58.5779 50.8067L36.1933 28.4221L66.7712 20.2288Z" fill="white" />
            <path d="M55.9831 0.135593L51.4593 17.0186L39.1001 4.65938L55.9831 0.135593Z" fill="white" />
            <path d="M30.7712 14.7712L22.5779 45.3491L0.193316 22.9645L30.7712 14.7712Z" fill="white" />
        </svg>


        // <div className={`${triangleType} ${trianglePlace}`}>
        // </div >
    );
}

export default Triangle;