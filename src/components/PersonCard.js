import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        justify: 'flex-start',
        margin: 20,
    },
    cardContent: {
        lineHeight: 2,
    }
});

export default ({ firstName, lastName, age, hairColor }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="left">
                    {lastName}, {firstName}
                </Typography>
                <Typography className={classes.cardContent} variant="body2" color="textSecondary" component="p" align="left">
                    Age: {age}
                    <br />
                        Hair Color: {hairColor}
                </Typography>
            </CardContent>
        </Card >
    );
}