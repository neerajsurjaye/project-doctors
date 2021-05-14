import { Container, Box, Button, Grid, TextField, Typography } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"
import { useState } from "react";
import { useHistory } from "react-router";




let Homepage = () => {
    let [city, setcity] = useState('null');

    let history = useHistory();

    let handleCity = (event, newValue) => {
        // console.log(newValue)
        setcity(newValue)
    }

    return (
        <Container maxWidth={'md'}>
            <Grid container direction="column">

                <Grid item>
                    <Typography variant='h2' align='center' style={
                        { height: "250px", display: 'flex', justifyContent: "center", alignItems: "center" }
                    }>Main Pic</Typography>
                </Grid>

                <Grid item container justify='center' alignItems='center' spacing={4}>

                    <Grid item xs={12} md={10}>
                        <Box p={0}>
                            <Autocomplete
                                options={["Betul", "Bhopal", "Delhi"]}
                                getOptionLabel={(x) => x}
                                onChange={handleCity}
                                renderInput={(x) => <TextField {...x} label="Enter City" variant='outlined'></TextField>}
                            ></Autocomplete>
                        </Box>
                    </Grid>

                    <Grid item md={2}>
                        <Button variant='contained' color='primary' onClick={() => history.push(`./city-${city}`)}>Search</Button>
                    </Grid>

                </Grid>

            </Grid>
        </Container >
    )
}

export default Homepage;