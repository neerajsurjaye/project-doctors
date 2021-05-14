import { Container, Divider, List, ListItem, ListItemText, ListSubheader, Paper, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router";

let Cateogary = () => {
    let { city } = useParams();
    let history = useHistory();



    let cats = ["cat1", "cat221", "cat12", "cat23", "cat34", "cat4"]

    let genListItems = (items) => {

        let out = []
        if (items) {
            items.map((x) => {
                out.push(
                    <ListItem button onClick={() => history.push(`${history.location.pathname}/cat-${x}`)}>
                        <ListItemText primary={x} />
                    </ListItem>
                )
                out.push(
                    <Divider variant='middle'></Divider>
                )
            })
        }

        return out;
    }

    return (
        <Container maxWidth={'sm'} >
            {/* <div>Cateogaray : city {city}</div> */}
            <Typography variant={'h4'}>Select Cateogary</Typography>
            <Paper elevation={3}>
                <List subheader={<ListSubheader>categories</ListSubheader>}>
                    {genListItems(cats)}
                </List>
            </Paper>

        </Container>
    )
}

export default Cateogary;