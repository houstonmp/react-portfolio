import Title from './Title';
import SideBar from './SideBar';
import ImportantLinks from './ImportantLinks'
import './TitlePage.css';

const TitlePage = () => {
    return (<>
        <section id="tp-body">
            <Title></Title>
            <SideBar />
            <ImportantLinks />
        </section>
    </>);
}

export default TitlePage;