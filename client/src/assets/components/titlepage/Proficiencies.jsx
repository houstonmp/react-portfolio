import styles from './Proficiencies.module.css'
import { React, Redux } from '../../img/React'
// import Node from ''

const Proficiencies = (props) => {
    const { pageLocation } = props;

    return (
        <>
            <div className={`${styles.prof_container}`}>
                <React logoType={`${styles.prof_logo} ${pageLocation && styles.isInvisible}`} />
                <Redux logoType={`${styles.prof_logo} ${pageLocation && styles.isInvisible}`} />
            </div>
        </>
    );
}

export default Proficiencies;

