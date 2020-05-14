import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textP: {
    fontSize: "40px",
    margin: "20px",
    color: "#002A6E",
    fontWeight: "bold",
  },
  img1: {
    width: "100px",
    height: "100px",
    marginLeft: "50px",
  },
  img2: {
    width: "150px",
    height: "80px",
    marginLeft: "50px",
  },
});

const Supported = () => {
  const classes = useStyles();
  const pondokIt = require("../../../Assets/pondokit.png");
  const pondokPro = require("../../../Assets/pondok-programmer.png");
  const pondokMul = require("../../../Assets/pondok-multimedia.png");
  const pondokImers = require("../../../Assets/pondok-imers.png");
  const permikomnas = require("../../../Assets/permikomnas.png");
  return (
    <>
      <Grid lg={3}>
        <p className={classes.textP}>Didukung Oleh </p>
      </Grid>

      <Grid
        lg={9}
        justify="center"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {[pondokIt, pondokPro, pondokMul, pondokImers, permikomnas].map(
          (img, index) => (
            <img
              className={index === 0 ? classes.img2 : classes.img1}
              src={img}
              alt=""
            />
          )
        )}
      </Grid>
    </>
  );
};
export default Supported;
