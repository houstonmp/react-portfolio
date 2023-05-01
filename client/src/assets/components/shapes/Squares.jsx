const Square = (props) => {
    const { squareType, squarePlace } = props;

    return (<svg className={`${squareType} ${squarePlace}`} viewBox="0 0 119 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" width="36" height="36" rx="5" fill="#D9D9D9" />
        <rect x="63" y="6" width="56" height="56" rx="5" fill="#D9D9D9" />
        <rect y="42" width="58" height="58" rx="6" fill="#D9D9D9" />
    </svg>
    );
}

export default Square;