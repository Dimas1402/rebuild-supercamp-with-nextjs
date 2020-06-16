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
import Link from "next/link";

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
  gridText: {
    padding: "100px",
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    root: {
      width: "300px",
    },
    text: {
      fontSize: "12px",
    },
    gridText: {
      padding: "20px",
      textAlign: "center",
    },
  },
}));

const Berbayar = () => {
  const classes = useStyles();
  const img1 = require("../../../Assets/Berbayar/img1-min.png");
  const img2 = require("../../../Assets/Berbayar/img2-min.png");
  const img3 = require("../../../Assets/Berbayar/img3-min.png");
  const img4 = require("../../../Assets/Berbayar/img4-min.png");
  const img5 = require("../../../Assets/Berbayar/img5-min.png");
  const img6 = require("../../../Assets/Berbayar/img6-min.png");
  return (
    <>
      <Grid container>
        <Grid className={classes.gridText} lg={12}>
          <h1 className={classes.title}>Program Berbayar</h1>
          <p className={classes.text}>
            Tujuan utama kami dari program berbayar ini tidak semata - mata
            untuk mengambil keuntungan, melainkan program ini adalah salah satu
            misi kami untuk mencapai visi yang kami buat yaitu dapat
            mensinergikan banyak orang. Melihat fakta yang ada bahwa di
            lingkungan sekitar kita masih banyak terjadi kesenjangan sosial,
            masih banyak anak - anak yatim dan orang - orang miskin yang belum
            mampu mendapatkan pendidikan yang layak. Maka dari itu dari program
            berbayar ini kami ingin membangun fasilitas pendidikan unutk mereka,
            sehingga harapan kami kedepannya kesenjangan sosial di lingkungan
            sekitar kita akan dapat terminimalisir
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
                  <Link
                    href="
                    /website_responsive"
                  >
                    <Button size="small" color="primary">
                      Lihat selengkapnya
                    </Button>
                  </Link>
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
