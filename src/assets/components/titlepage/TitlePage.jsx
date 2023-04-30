import { useState } from 'react';

import Title from './Title';
import Shapes from "../shapes/Shapes"
import './TitlePage.css';
import Proficiencies from './Proficiencies';

const TitlePage = (props) => {
    const { circleType, triangleType, isShown } = props;


    return (<>
        <section id="tp-body">
            <Title></Title>
            <Shapes circleType={circleType} triangleType={triangleType} />
            <Proficiencies isShown={isShown} />
        </section>
    </>);
}

export default TitlePage;