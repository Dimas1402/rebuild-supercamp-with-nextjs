import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const data = [
  {
    title: "Lokasi",
    text1:
      "Gegunung, Tirtohargo, Kec. Kretek, Bantul, Daerah Istimewa Yogyakarta 55772 ",
    text2: null,
    text3: null,
    text4: null,
  },
  {
    title: "Hubungi Kami",
    text1: "FAQ",
    text2: "+62 8783 7883 317",
    text3: "Kerja sama dan donasi",
    text4: " +62 877 8733 1091",
  },
  {
    title: "Email Kami",
    text1: "ingin bantuan melalui email, hubungi kami di alamat email ini",
    text2: "super@supercampprogrammer.com",
    text3: null,
    text4: null,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    boxShadow: "none",
    maxWidth: 345,
    margin: "20px",
    marginTop: "50px",
  },
  media: {
    width: "50px",
    height: "50px",
    margin: "0 auto",
  },
  text: {
    fontSize: "35px",
    fontWeight: "bold",
    color: "white",
  },
  text1: {
    fontSize: "45px",
    fontWeight: "bold",
    color: "white",
    position: "relative",
    top: "-50px",
  },
  text2: {
    marginTop: "-85px",
    color: "white",
    fontWeight: "600",
    fontSize: "12px",
  },
}));
const Footer = () => {
  const classes = useStyles();
  const lokasi = require("../../Assets/lokasi.png");
  const kontak = require("../../Assets/kontak.png");
  const email = require("../../Assets/email.png");
  return (
    <>
      <Grid item lg={3}>
        <Card className={classes.root}>
          <CardActionArea className={classes.cardBox}>
            <CardContent>
              <p className={classes.text}>Supercamp </p>
              <p className={classes.text1}>Programmer</p>
              <p className={classes.text2}>
                Menjadi wadah pendidikan yang menyiapkan programmer profesional,
                kreatif, serta inovatif yang mampu bekerja di perusahaan
                nasional maupun internasional dan mampu menciptakan budaya
                kerjasama dalam kebersamaan membangun negeri.
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      {data.map((res, index) => (
        <Grid item lg={3}>
          <Card className={classes.root}>
            <CardActionArea className={classes.cardBox}>
              <CardMedia
                className={classes.media}
                image={index === 0 ? lokasi : index === 1 ? kontak : email}
                title="Contemplative Reptile"
              />
              <CardContent style={{ textAlign: "center" }}>
                <Typography style={{ color: "white" }} gutterBottom variant="p">
                  {res.text1}
                </Typography>
                <Typography
                  style={{ color: "white" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {res.text2}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
};
export default Footer;
