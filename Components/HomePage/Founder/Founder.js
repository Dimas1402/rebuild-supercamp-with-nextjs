import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "20px",
    boxShadow: "3px 3px 8px 0px rgba(0,0,0,0.15)",
  },
  media: {
    margin: "0 auto",
  },
  cardBox: {
    height: "300px",
  },
  img: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    margin: "0 auto",
    boxShadow: "10px 10px 50px -20px rgba(0,0,0,.75)",
  },
  textName: {
    fontSize: "20px",
    color: "#4f4c4c",
    fontWeight: "bold",
  },
  textF: {
    fontSize: "12px",
    marginTop: "-15px",
  },
  textQuotes: {
    fontSize: "14px",
    color: "#757474",
    fontWeight: "400",
  },
  boxText: {
    width: "50%",
  },
  [theme.breakpoints.down("xs")]: {
    boxText: {
      marginBottom: "20px",
    },
  },
}));

export default function Founder() {
  const classes = useStyles();
  const Hafif = require("../../../Assets/hafif.jpg");
  const Wandi = require("../../../Assets/wandi.jpg");
  return (
    <>
      <Grid align="center" className={classes.media} item lg={6}>
        <img className={classes.img} src={Hafif} />
        <p className={classes.textName}>M.Hafif Al-Busyro</p>
        <p className={classes.textF}>Founder</p>
        <div className={classes.boxText}>
          <i className={classes.textQuotes}>
            &#128630; Ketika manusia memahami arti sinergi , maka tak akan ada
            lagi permasalahan sosial di dunia ini &#128631;
          </i>
        </div>
      </Grid>
      <Grid align="center" className={classes.media} item lg={6}>
        <img className={classes.img} src={Wandi} />
        <p className={classes.textName}>Wandi Pratama</p>
        <p className={classes.textF}>CO - Founder</p>
        <div className={classes.boxText}>
          <i className={classes.textQuotes}>
            &#128630; Teruslah menjadi penuntut ilmu sampai akhirnya dirimu
            sudah terbujur kaku &#128631;
          </i>
        </div>
      </Grid>
    </>
  );
}
