import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import Footer from "../../../../Footer/Footer";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  marginGrid: {},
  boxGrid: {
    padding: "100px",
  },
  icon: {
    width: "50px",
    height: "50px",
  },
  tableText: {
    color: "green",
    fontWeight: "bold",
  },
  tableText2: {
    color: "red",
    fontWeight: "bold",
  },
  imgIconAlur: {
    width: "100px",
    height: "100px",
    margin: "40px",
  },
  boxFounder: {
    marginTop: "80px",
  },
  textInves: {
    backgroundColor: "#0B3074",
    padding: "20px",
    color: "white",
    fontWeight: "bold",
    marginTop: "20px",
  },
  listHeight: {
    height: "2px",
  },
  btnDaftar: {
    marginTop: "20px",
    backgroundColor: "#0B3074",
  },
  box1: {
    width: "50%",
    marginTop: "20px",
  },
  box2: {
    width: "50%",
    marginTop: "20px",
  },
  textJadwal: {
    fontWeight: "bold",
    color: "#0B3074",
    marginTop: "50px",
  },
  [theme.breakpoints.down("xs")]: {
    image: {
      width: "200px",
      height: "200px",
    },
    listHeight: {
      height: "30px",
    },
    boxGrid: {
      padding: "60px",
    },
    tableText: {
      color: "green",
    },
    tableText2: {
      color: "red",
    },
    box1: {
      width: "100%",
    },
    box2: {
      width: "100%",
    },
    textJadwal: {
      fontWeight: "bold",
      color: "#0B3074",
      marginTop: "50px",
      fontSize: "20px",
    },
    textInves: {
      fontSize: "30px",
    },
    btnDaftar: {
      fontSize: "10px",
    },
  },
}));
const WebsiteResponsiveComponent = () => {
  const classes = useStyles();
  const img1 = require("../../../../../Assets/Berbayar/img1-min.png");
  const icon1 = require("../../../../../Assets/webicon/favorite.png");
  const icon2 = require("../../../../../Assets/webicon/clock.png");
  const icon3 = require("../../../../../Assets/webicon/waving.png");
  const icon4 = require("../../../../../Assets/webicon/money.png");

  const [token, setToken] = React.useState("");
  const [jadwal, setJadwal] = React.useState([]);
  const [sizeWindow, setSizeWindow] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setSizeWindow(document.documentElement.clientWidth);
    console.log("ukuran", sizeWindow);
  }, []);

  React.useEffect(() => {
    setLoading(true);
    const Login = {
      email: "superprogrammer@gmail.com",
      password: "itmanager",
    };
    Axios.post("https://api.supercampprogrammer.com/api/login", Login).then(
      (res) => {
        console.log("resss", res.data[0].token);
        const token = res.data[0].token;
        setToken(token);
        Axios.get("https://api.supercampprogrammer.com/api/lesson", {
          headers: {
            Authorization: "Bearer" + token,
          },
        })
          .then((res) => {
            console.log("resss", res);
            const jadwal = res.data;
            setJadwal(jadwal);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
          });
      }
    );
  }, []);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <>
      <Grid className={classes.boxGrid} container>
        <Grid container spacing={3}>
          <Grid className={classes.marginGrid} item xs={12}>
            <Typography
              style={{
                fontWeight: "bold",
                color: "#0B3074",
                marginBottom: "40px",
              }}
              variant="h4"
            >
              Membuat Website Responsive
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.marginGrid} container>
          <Grid item lg={4}>
            <img className={classes.image} src={img1} />
          </Grid>
          <Grid item lg={8}>
            {[
              "Level : Dasar / Pemula",
              "Durasi : 1 hari ( 07.30 - 17.00 WIB )",
              "Bahasa : Indonesia",
              "Biaya: Rp 180.000,00",
            ].map((text, index) => (
              <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                  <ListItemIcon>
                    <img
                      key={index}
                      className={classes.icon}
                      src={
                        index === 0
                          ? icon1
                          : index === 1
                          ? icon2
                          : index === 2
                          ? icon3
                          : icon4
                      }
                    />
                  </ListItemIcon>
                  <Typography style={{ color: "#444343", fontWeight: "500" }}>
                    {text}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              style={{
                fontWeight: "bold",
                color: "#0B3074",
                marginTop: "50px",
              }}
              variant="h4"
            >
              Pengenalan Pelatihan
            </Typography>
            <Box className={classes.box1}>
              <Typography
                style={{
                  color: "#444343",
                  fontSize: "15px",
                  fontWeight: "450",
                }}
                variant="p"
              >
                Pelatihan ini akan membahas dasar - dasar pengembangan sebuah
                website, dimana para peserta akan diberikan pelatihan dasar
                sebagai berikut :
              </Typography>
              {[
                "Persiapan tools yang dibutuhkan dalam membuat website",
                "Teori dasar untuk membuat sebuah website responsive",
                "Praktik untuk membuat website responsive",
                "Teori dasar unutk menghosting dan menambahkan domain",
                "Praktik menghosting dan menambahkan domain",
              ].map((text, index) => (
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <Typography
                      key={index}
                      style={{ color: "#444343", fontWeight: "450" }}
                      variant="p"
                    >
                      &#8227;{text}
                    </Typography>
                  </ListItem>
                </List>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              style={{
                fontWeight: "bold",
                color: "#0B3074",
                marginTop: "50px",
              }}
              variant="h4"
            >
              Persyaratan Peserta
            </Typography>
            {[
              "Memiliki laptop",
              "Memiliki semangat dalam belajar",
              "Memiliki bukti pembayaran",
            ].map((text, index) => (
              <Box className={classes.box2}>
                <List
                  className={classes.listHeight}
                  component="nav"
                  aria-label="main mailbox folders"
                >
                  <ListItem>
                    <Typography
                      key={index}
                      style={{
                        margin: "10px",
                        color: "#444343",
                        fontWeight: "450",
                      }}
                      variant="p"
                    >
                      &#8227;{text}
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              style={{
                fontWeight: "bold",
                color: "#0B3074",
                marginTop: "50px",
              }}
              variant="h4"
            >
              Persyaratan Peserta
            </Typography>
            {[
              "Fasilitas Peserta",
              "Penginapan gratis bagi perserta luar kota",
              "Snack dan launch",
              "Sertifikat",
              "Kaos",
              "Modul",
            ].map((text, index) => (
              <Box className={classes.box2}>
                <List
                  style={{ height: "2px" }}
                  component="nav"
                  aria-label="main mailbox folders"
                >
                  <ListItem>
                    <Typography
                      key={index}
                      style={{
                        margin: "10px",
                        color: "#444343",
                        fontWeight: "450",
                      }}
                      variant="p"
                    >
                      &#8227;{text}
                    </Typography>
                  </ListItem>
                </List>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid justify="center" container>
          <Typography className={classes.textJadwal} variant="h4">
            Jadwal pelatihan
            {loading === true ? (
              <LinearProgress style={{ margin: "20px" }} />
            ) : (
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                Juli 2020
              </p>
            )}
          </Typography>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead style={{ background: "#343A40" }}>
                <TableRow>
                  {[
                    "Gelombang",
                    "Tanggal",
                    "Pelatihan",
                    "Durasi",
                    "Waktu",
                    "Sisa Kuota",
                    "Status",
                  ].map((text, index) => (
                    <TableCell
                      style={{ textAlign: "center", color: "white" }}
                      key={index}
                    >
                      {text}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {jadwal.map((data) => (
                  <TableRow key={data.id}>
                    {data.class_month === "7" && data.class_duration === "1" ? (
                      <>
                        {" "}
                        <TableCell align="center">
                          Gelombang {data.class_wave}
                        </TableCell>
                        <TableCell align="center">{data.date} Juli</TableCell>
                        <TableCell align="center">{data.classname}</TableCell>
                        <TableCell align="center">{data.duration}</TableCell>
                        <TableCell align="center">07.30 - 17.00</TableCell>
                        <TableCell align="center">{data.quota}</TableCell>
                        <TableCell
                          className={
                            data.status === "Tersedia"
                              ? classes.tableText
                              : classes.tableText2
                          }
                          align="center"
                        >
                          {data.status === "Tersedia" ? "Tersedia" : "Habis"}
                        </TableCell>{" "}
                      </>
                    ) : null}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid align="center" justify="center" alignItems="center" container>
          <Grid xs={12}>
            <Typography
              align="left"
              style={{
                fontWeight: "bold",
                color: "#0B3074",
                marginTop: "50px",
              }}
              variant="h4"
            >
              Alur Pendaftaran
            </Typography>
          </Grid>
          <Grid>
            <Box>
              {[
                "https://i.pinimg.com/originals/0d/81/4e/0d814e74de821066fea7aa0b37e6ed91.png",
                "https://i.pinimg.com/564x/81/e1/4e/81e14ea964227bec0a3bbb4652601f14.jpg",
                "https://i.pinimg.com/originals/14/78/da/1478da586c56d6e5ebf7a7949e8a441c.png",
                "https://i.pinimg.com/originals/69/37/8d/69378d631f5f18e8d771465b6a0543cb.png",
                "https://i.pinimg.com/originals/5d/2d/9f/5d2d9f72e31f178626036c6efe8b2e2f.png",
              ].map((img, index) => (
                <>
                  <Tooltip
                    key={index}
                    disableTouchListener="true"
                    arrow="true"
                    title={
                      index === 0
                        ? "Mengisi formulir pendaftaran"
                        : index === 1
                        ? "Menunggu konfirmasi dari admin via WA"
                        : index === 2
                        ? "Melakukan pembayaran via transfer bank"
                        : index === 3
                        ? "Kirim bukti pembayaran via WA"
                        : "Datang ke lokasi saat hari H"
                    }
                    placement="bottom"
                  >
                    <img className={classes.imgIconAlur} src={img} />
                  </Tooltip>
                </>
              ))}
            </Box>
          </Grid>
          <Grid xs={12}>
            <Typography
              align="center"
              style={{
                fontWeight: "bold",
                color: "#0B3074",
                marginTop: "50px",
              }}
              variant="h4"
            >
              Investasi Pelatihan
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography className={classes.textInves} variant="h2">
              {" "}
              Rp. 180.0000,00
            </Typography>
            <Link href="/pendaftaran">
              <Button
                className={classes.btnDaftar}
                variant="contained"
                color="primary"
              >
                <BorderColorIcon /> &nbsp; Daftar Sekarang
              </Button>
            </Link>
          </Grid>
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

export default WebsiteResponsiveComponent;
