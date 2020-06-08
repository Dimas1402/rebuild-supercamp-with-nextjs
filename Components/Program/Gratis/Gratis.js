import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Data from "./Data.json";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Footer from "../../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    color: "#0B3074",
  },
  text: {
    fontSize: "22px",
    color: "#666664",
    fontWeight: 450,
  },
  gridSpacing: {
    margin: "30px",
  },
  root: {
    borderBottom: "7px solid #0B3074",
    height: "420px",
  },
  media: {
    backgroundSize: "cover",
  },
  siap1: {
    fontSize: "11px",
    color: "white",
    background: "green",
    padding: "6px",
    borderRadius: "10px",
  },
  siap2: {
    fontSize: "11px",
    color: "white",
    background: "#a50404",
    padding: "6px",
    borderRadius: "10px",
  },
  boxFounder: {
    marginTop: "80px",
  },
  // cardBox: {
  //   height: "400px",
  //   witdh: "100px",
  // },
  [theme.breakpoints.down("sm")]: {
    root: {
      width: "300px",
    },
  },
}));

const Berbayar = () => {
  const classes = useStyles();
  const img1 = require("../../../Assets/BebasBiaya/img1.png");
  const img2 = require("../../../Assets/BebasBiaya/img2.png");
  const img3 = require("../../../Assets/BebasBiaya/img3.png");
  const img4 = require("../../../Assets/BebasBiaya/img4.png");
  const img5 = require("../../../Assets/BebasBiaya/img5.png");
  const img6 = require("../../../Assets/BebasBiaya/img6.png");
  const img7 = require("../../../Assets/BebasBiaya/img7.png");
  const img8 = require("../../../Assets/BebasBiaya/img8.png");
  const img9 = require("../../../Assets/BebasBiaya/img9.png");
  return (
    <>
      <Grid container>
        <Grid style={{ padding: "100px", textAlign: "center" }} lg={12}>
          <h1 className={classes.title}>Program Bebas Biaya</h1>
          <p className={classes.text}>
            Demi mewujudkan cita-cita bangsa ini menjadi bangsa yang maju,
            cerdas, kreatif, dan inovatif, kami membuat program pendidikan bebas
            biaya serta memberikan fasilitas untuk membantu suksesnya program
            yang dibuat. Program ini adalah program sosial yang kami buat
            sebagai bentuk ikhtiar kami untuk memajukan pendidikan di Indonesia
          </p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          lg={12}
        >
          <Grid justify="center" container>
            <h1 className={classes.title}>Produk Pelayanan Pelatihan</h1>
          </Grid>
          {Data.Data.map((res) => (
            <Grid className={classes.gridSpacing} lg={4}>
              <Card boxShadow={3} className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={
                      res.id === 0
                        ? img1
                        : res.id === 1
                        ? img2
                        : res.id === 2
                        ? img3
                        : res.id === 3
                        ? img4
                        : res.id === 4
                        ? img5
                        : img6
                    }
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      style={{ fontWeight: "500" }}
                      gutterBottom
                      variant="h6"
                    >
                      {res.text}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                          <ListItemIcon>
                            <AccessTimeIcon />
                          </ListItemIcon>
                          <ListItemText primary={res.waktu} />
                        </ListItem>
                        <ListItem button>
                          <ListItemIcon>
                            <StarBorderIcon />
                          </ListItemIcon>
                          <ListItemText primary={res.Tingkat} />
                        </ListItem>
                      </List>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Lihat selengkapnya
                  </Button>
                  <p
                    className={
                      res.siap === "Tersedia" ? classes.siap1 : classes.siap2
                    }
                  >
                    {res.siap}
                  </p>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        alignItems="center"
        style={{ background: "#002A6E" }}
        className={classes.boxFounder}
        justify="center"
        container
      >
        <Footer />
      </Grid>
    </>
  );
};
export default Berbayar;
