import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles({
  h3: {
    fontSize: "40px",
    margin: "20px",
    color: "#002A6E",
  },
  textP: {
    fontSize: "15px",
    color: "#848484",
    fontWeight: "500",
    margin: "20px",
  },
  img: {
    width: "30%",
    height: "50px",
    margin: "20px",
    boxShadow: "3px 3px 8px 0px rgba(0,0,0,0.15)",
    display: "block",
    borderRadius: "5px",
  },
  root: {
    margin: "10px",
    boxShadow: "3px 3px 8px 0px rgba(0,0,0,0.15)",
    height: "200px",
  },
});
const Program = () => {
  const classes = useStyles();
  const bayar = require("../../../Assets/paid.png");
  const gratis = require("../../../Assets/free.png");
  return (
    <>
      <Grid lg={4} item>
        <h3 className={classes.h3}>Pilih Program belajar yang kamu inginkan</h3>
        <p className={classes.textP}>
          Tidak hanya belajar kamu juga berkesempatan unutuk membangun karir di
          perusahaan yang kami ajukan.
        </p>
      </Grid>
      {["Program Berbayar", "Program Bebas Biaya"].map((res, index) => (
        <Grid lg={4} item>
          <img
            alt=""
            className={classes.img}
            src={index === 0 ? bayar : gratis}
          />
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography
                  style={{ fontWeight: "500" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {res}
                </Typography>
                <Typography
                  style={{ fontWeight: "400" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {index === 0
                    ? "Tujuan utama kami dari program berbayar ini tidak semata - mata untuk mengambil keuntungan, melainkan program ini adalah salah satu misi kami untuk mencapai visi yang kami buat yaitu dapat mensinergikan banyak orang..."
                    : "Demi mewujudkan cita-cita bangsa ini menjadi bangsa yang maju, cerdas, kreatif, dan inovatif, kami membuat program pendidikan bebas biaya..."}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href={index === 0 ? "/berbayar" : "/gratis"}>
                <Button size="small" color="primary">
                  Lihat Selengkapnya
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default Program;
