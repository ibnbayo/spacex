import styles from './launch.module.css'
import moment from 'moment'

const Launch = ({props}) => {
    console.log(props)

    const imageIndex = Math.round(Math.random() * 5)

    return (
       

<main> 
        <div className={styles.card}>
            <div className={styles.launchTitle}>{props.name}</div>
  
  {/* <p>Flight Number: {props.flight_number}</p> */}
  <img src={props.rocket.flickr_images[imageIndex]} alt={props.name}></img>
  <p>Launch Date: {moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</p>
  
</div>
</main>

    )

}

export default Launch