import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Data from "./Data.json";

const useStyles = makeStyles({
  root: {
    boxShadow: "3px 3px 8px 0px rgba(0,0,0,0.15)",

    margin: "10px",
  },
  media: {
    width: "50px",
    height: "50px",
    margin: "0 auto",
  },
  cardBox: {
    height: "200px",
    witdh: "100px",
  },
});

export default function Keunggulan() {
  const classes = useStyles();
  const modul = require("../../../Assets/modul.png");
  const mentor = require("../../../Assets/mentor.png");
  const camp = require("../../../Assets/camp.png");
  const uang = require("../../../Assets/uang.png");
  const web = require("../../../Assets/web.png");
  const telegram = require("../../../Assets/tele.png");

  return (
    <>
      {Data.Data.map((res) => (
        <Grid item lg={4}>
          <Card className={classes.root}>
            <CardActionArea className={classes.cardBox}>
              <CardMedia
                className={classes.media}
                image={
                  res.id === 0
                    ? modul
                    : res.id === 1
                    ? mentor
                    : res.id === 2
                    ? camp
                    : res.id === 3
                    ? uang
                    : res.id === 4
                    ? web
                    : telegram
                }
                title="Contemplative Reptile"
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {res.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {res.text}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
}
