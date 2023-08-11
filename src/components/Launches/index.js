import {Grid, Paper} from "@mui/material";
import Launch from "../Launch";
import styles from './launches.module.css';

const Launches = ({launches}) =>  {
    return (
        <Grid container spacing={2}>
            {launches.map((launch) => (
                
                <Grid key={launch.id} item xs={12} sm={6} md={4}>
                    <Launch props={launch}/>
                </Grid>
            ))}
        </Grid>
    );
}


export default Launches