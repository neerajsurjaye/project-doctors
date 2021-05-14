import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

let useStyles = makeStyles({
    alignRight: {
        marginLeft: "auto",
    }
})

let Navbar = () => {
    // let classes = useStyles()
    let history = useHistory()

    return (
        <AppBar color='primary' position="static">
            <Toolbar>
                <Typography variant='h6' onClick={() => history.push('/')} >Doctors Search</Typography >
                {/* <Button className={classes.alignRight} variant='contained' color='secondary'>Hindi</Button> */}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;