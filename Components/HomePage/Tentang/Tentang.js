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
    maxWidth: 345,
    margin: "20px",
    boxShadow: "3px 3px 8px 0px rgba(0,0,0,0.15)",
  },
  media: {
    width: "100px",
    height: "100px",
    margin: "0 auto",
  },
  cardBox: {
    height: "300px",
  },
});

export default function Tentang() {
  const classes = useStyles();
  const bisnis = require("../../../Assets/bisnis.png");
  const profesional = require("../../../Assets/profesional.png");
  const kreatif = require("../../../Assets/kreatif.png");
  const sinergi = require("../../../Assets/sinergi.png");

  return (
    <>
      {Data.Data.map((res) => (
        <Grid item lg={3}>
          <Card className={classes.root}>
            <CardActionArea className={classes.cardBox}>
              <CardMedia
                className={classes.media}
                image={
                  res.id === 0
                    ? bisnis
                    : res.id === 1
                    ? profesional
                    : res.id === 2
                    ? kreatif
                    : sinergi
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
