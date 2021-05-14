import { Container, Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router";

let Doctors = () => {
    let { cat, city } = useParams();

    let doctors = ["sadf", "sadffsd", "asdfw ", "asdfs"]

    let genList = (doctors) => {
        let output = []

        doctors.map((x) => {
            output.push(
                <Grid item xs={12} md={4}>
                    <Typography>{x}</Typography>
                </Grid>
            )
        })

        return output
    }

    return (
        <Container maxWidth={'md'}>
            <Grid container>
                {genList(doctors)}
            </Grid>
        </Container>
    )
}

export default Doctors;