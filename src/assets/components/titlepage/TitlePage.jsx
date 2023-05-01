import { useState } from 'react';

import Title from './Title';
import './TitlePage.css';
import Proficiencies from './Proficiencies';

const TitlePage = (props) => {
    const { pageLocation } = props;



    return (<>
        <section id="tp-body">
            <Title></Title>
            <Proficiencies pageLocation={pageLocation} />
        </section>
    </>);
}

export default TitlePage;