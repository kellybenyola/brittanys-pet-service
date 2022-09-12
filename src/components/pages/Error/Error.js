import styles from './Error.module.css';
import Body from '../../layout/Body/Body';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
const Error = () =>{
    return(
        <div className={styles.errorPg}>
                <h1>Oh no!</h1>
                <h3>Looks like that page doesn't exist!</h3>
        </div>
    )
}


export default Error;