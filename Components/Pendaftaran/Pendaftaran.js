import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
  },
  form: {
    margin: theme.spacing(1),
  },
  boxFounder: {
    marginTop: "80px",
  },
  box: {
    backgroundColor: "#0B3074",
    padding: "50px",
  },
  text1: {
    color: "white",
    textAlign: "center",
  },
  text2: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold ",
  },
  text3: {
    color: "#60708A",
    textAlign: "left",
    fontWeight: "bold ",
    marginBottom: "40px",
    marginLeft: "1 0px",
  },
}));

const PendaftaranComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root} container>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Typography className={classes.text1} variant="h4">
              Pendaftaran
            </Typography>
            <Typography className={classes.text2} variant="h2">
              Supercamp Programmer
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid alignItems="center" container>
        <Grid lg={6}>
          <img
            className={classes.img}
            src={require("../../Assets/bg-daftar.png")}
          />
        </Grid>
        <Grid style={{ padding: "30px" }} xs={12} lg={6}>
          <Typography className={classes.text3} variant="h4">
            Formulir Pendaftaran
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              fullWidth="true"
              id="outlined-basic"
              label="Nama Lengkap"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="Tempat Lahir"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "20px" }}
              variant="outlined"
              fullWidth="true"
              id="date"
              label="Tanggal Lahir"
              type="date"
              //   defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="Kota"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="Alamat Lengkap"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="No Identitas (KTP/SIM/PASSPORT)"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="No WA"
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <FormControl
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              className={classes.formControl}
              variant="outlined"
            >
              <InputLabel id="demo-simple-select-label">Program</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              style={{ marginBottom: "20px", width: "30%" }}
              className={classes.formControl}
              variant="outlined"
            >
              <InputLabel id="demo-simple-select-label">Gelombang</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              style={{ marginLeft: "20px", width: "30%" }}
              className={classes.formControl}
              variant="outlined"
            >
              <InputLabel id="demo-simple-select-label">Bulan</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              style={{ marginLeft: "20px", width: "30%" }}
              className={classes.formControl}
              variant="outlined"
            >
              <InputLabel id="demo-simple-select-label">Tahun</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              style={{ marginBottom: "20px" }}
              className={classes.formControl}
              variant="outlined"
              fullWidth="true"
            >
              <InputLabel id="demo-simple-select-label">Ukuran Kaos</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary">
              Kirim
            </Button>
          </form>
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

export default PendaftaranComponent;
