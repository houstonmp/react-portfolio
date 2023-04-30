import Title from './Title';
import SideBar from './SideBar';
import ImportantLinks from './ImportantLinks'
import Shapes from "./shapes/Shapes"
import './TitlePage.css';

const TitlePage = () => {
    return (<>
        <section id="tp-body">
            <Title></Title>
            <Shapes />
            <SideBar />
            <ImportantLinks />
        </section>
    </>);
}

export default TitlePage;