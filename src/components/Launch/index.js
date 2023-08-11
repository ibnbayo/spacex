import styles from './launch.module.css'
import moment from 'moment'

const Launch = ({props}) => {
    console.log(props)

    const imageIndex = Math.round(Math.random() * 5)

    return (
        <main>
        <div 
            role="img"
            aria-label={props.name}
            tabIndex="0"
            className={styles.card}
        >

            <header className={styles.launchTitle}>
            {props.name} 
            </header>

            <img
            src={props.rocket.flickr_images[imageIndex]}
            alt={`${props.name} launch`} 
            />

            <p>
            Launch Date: {moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}
            </p>

        </div>
        </main>
    )

}

export default Launch