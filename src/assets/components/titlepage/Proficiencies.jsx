import styles from './Proficiencies.module.css'
import React from '../../img/React'
// import Node from ''

const Proficiencies = (props) => {
    const { isShown } = props;
    console.log("osShown", isShown);

    return (
        <>
            <div className={`${styles.prof_container}`}>
                <React logoType={`${styles.prof_logo} ${isShown && styles.isInvisible}`} />
            </div>
            {/* < */}
        </>
    );
}

export default Proficiencies;

