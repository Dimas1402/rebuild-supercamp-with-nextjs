import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Drawers from "../Drawer/Drawer";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  btnFont: {
    fontFamily: "sans-serif",
    margin: "5px",
    color: "#1C3864",
    fontWeight: "bold",
    fontSize: "12px",
  },
  nav: {
    background: "none",
    boxShadow: "none",
    position: "fixed",
    transition: "0.5s",
  },
  nav2: {
    background: "white",
    position: "fixed",
    transition: "0.5s",
  },
  img: {
    position: "absolute",
    width: "150px",
    height: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    menuLg: {
      display: "none",
      zIndex: "9999",
    },
    menuButton: {
      color: "blue",
      position: "absolute",
      right: "0",
      zIndex: "9999",
    },
  },
  [theme.breakpoints.down("xs")]: {
    menuButton: {
      color: "blue",
      position: "absolute",
      right: "0",
      zIndex: "9999",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const Logo = require("../../Assets/logo.png");
  const [nvbar, setNvbar] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setNvbar(true);
    } else {
      setNvbar(false);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar className={nvbar === true ? classes.nav2 : classes.nav}>
        <Toolbar>
          <Drawers />

          <img className={classes.img} src={Logo} />
          <div
            className={classes.menuLg}
            style={{ position: "absolute", right: "0" }}
          >
            {[
              "Beranda",
              "Tentang",
              "Program",
              "Support",
              "Portofolio",
              "Testimoni",
              "Kontak",
            ].map((text, index) => (
              <Button
                href={
                  text === "Beranda"
                    ? "#beranda"
                    : text === "Tentang"
                    ? "#tentang"
                    : text === "Program"
                    ? "#program"
                    : text === "Support"
                    ? "#support"
                    : text === "Portofolio"
                    ? "#portofolio"
                    : text === "Testimoni"
                    ? "#testimoni"
                    : "#kontak"
                }
                className={classes.btnFont}
              >
                {" "}
                <Typography variant="a">{text}</Typography>
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
