import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tentang from "../HomePage/Tentang/Tentang";
import Founder from "../HomePage/Founder/Founder";
import Typography from "@material-ui/core/Typography";
import Keunggulan from "../HomePage/Keunggulan/Keunggulan";
import Program from "../HomePage/Program/Program";
import Supported from "./Supported/Supported";
import Portofolio from "./Portofolio/Portofolio";
import Testimoni from "./Testimoni/Testimoni";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "800px",
    height: "600px",
    position: "relative",
    float: "right",
  },

  // gridBox: {
  //   background: require("../../Assets/bg.png"),
  // },
  text: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#002A6E",
  },
  text1: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#2175AA",
    position: "relative",
    top: "-60px",
  },
  text2: {
    color: "#848484",
    top: "-100px",
    fontSize: "15px",
    position: "relative",
    fontWeight: "500",
  },
  boxText: {
    width: "80%",
    position: "relative",
    top: "100px",
    left: "40px",
  },
  btn: {
    position: "realtive",
    top: "-80px",
  },
  boxTentang: {
    marginTop: "80px",
  },
  boxFounder: {
    marginTop: "80px",
  },
  boxFounderPortofolio: {
    marginTop: "80px",
    background: "rgb(28,57,125)",
    background:
      "linear-gradient(90deg, rgba(28,57,125,1) 2%, rgba(51,109,212,1) 100%)",
  },
  textTitle: {
    marginTop: "80px",
    textAlign: "center",
    color: "#002A6E",
    fontWeight: "500",
    opacity: "0.8",
  },
  [theme.breakpoints.down("md")]: {
    img: {
      width: "600px",
      height: "500px",
    },
    text: {
      fontSize: "30px",
    },
    text1: {
      fontSize: "40px",
      position: "relative",
      top: "-50px",
    },
    text2: {
      position: "relative",
      fontSize: "10px",
      top: "-8 0px",
    },
    boxText: {
      width: "80%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    img: {
      width: "400px",
      height: "300px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    img: {
      width: "200px",
      height: "200px",
    },
    text: {
      fontSize: "15px",
      position: "relative",
      top: "-25px",
    },
    text1: {
      fontSize: "20px",
    },
    text2: {
      fontSize: "8px",
      position: "relative",
      top: "-60px",
    },
    btn: {
      fontSize: "5px",
      position: "relative",
      top: "-60px",
    },
    textTitle: {
      fontSize: "35px",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const img = require("../../Assets/img1.png");

  return (
    <>
      <Grid
        className={classes.gridBox}
        // style={{ border: "2px solid black" }}
        container
      >
        <Grid id="beranda" item xs={6} sm={4} lg={4}>
          <div className={classes.boxText}>
            <p className={classes.text}>Supercamp </p>
            <p className={classes.text1}>Programmer</p>
            <p className={classes.text2}>
              Menjadi wadah pendidikan yang menyiapkan programmer profesional,
              kreatif , serta inovatif yang mampu bekerja di perusahaan nasional
              maupun internasional dan mampu menciptakan budaya kerjasama dalam
              kebersamaan membangun negeri
            </p>
            <Button className={classes.btn} variant="contained" color="primary">
              Daftar Sekarang
            </Button>
          </div>
        </Grid>
        <Grid item xs={6} sm={8} lg={8}>
          <img className={classes.img} src={img} alt="" />
        </Grid>
      </Grid>
      <Grid
        id="tentang"
        className={classes.boxTentang}
        justify="center"
        container
      >
        <Tentang />
      </Grid>
      <Typography className={classes.textTitle} variant="h3">
        Founder dan CO - Founder
      </Typography>
      <Grid className={classes.boxFounder} justify="center" container>
        <Founder />
      </Grid>
      <Typography className={classes.textTitle} variant="h3">
        Keunggulan
      </Typography>
      <Grid className={classes.boxFounder} justify="center" container>
        <Keunggulan />
      </Grid>
      <Grid
        id="program"
        className={classes.boxFounder}
        justify="center"
        container
      >
        <Program />
      </Grid>
      <Grid
        id="support"
        className={classes.boxFounder}
        justify="center"
        container
      >
        <Supported />
      </Grid>
      <Grid
        id="portofolio"
        className={classes.boxFounderPortofolio}
        justify="center"
        container
      >
        <Portofolio />
      </Grid>
      <Typography className={classes.textTitle} variant="h3">
        Testimoni
      </Typography>
      <Grid
        id="testimoni"
        className={classes.boxFounder}
        justify="center"
        container
      >
        <Testimoni />
      </Grid>
      <Grid
        id="kontak"
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
export default HomePage;
