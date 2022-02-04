import styles from './CallDiv.module.css';



const CallDiv = () =>{
    return(
        <div  className={styles.callDiv}>
                <span>Ready to make your first appointment?</span>
                <button><a href="https://www.timetopet.com/portal/brittanyspetservice/create-account">BOOK NOW</a></button>
        </div>
    )
}


export default CallDiv;

