import styles from './launch.module.css'
import moment from 'moment'

const Launch = ({props}) => {

    return (
       


        <div className={styles.card}>
            <div className={styles.launchTitle}>{props.name}</div>
  
  <p>Flight Number: {props.flight_number}</p>
  <p>Launch Date: {moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</p>
  
</div>

    )

}

export default Launch