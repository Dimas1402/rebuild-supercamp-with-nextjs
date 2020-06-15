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
import Axios from "axios";

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
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    console.log("cekk ", userInput);
  });

  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      nama: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      kota: "",
      alamat: "",
      id_number: "",
      email: "",
      kelas: "",
      gelombang: "",
      bulan_kelas: "",
      tahun_kelas: "",
      photo: "photo.jpg",
      phone: "",
      kaos: "",
    }
  );

  const [userValidation, setUserValidation] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      nama: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      kota: "",
      alamat: "",
      id_number: "",
      email: "",
      kelas: "",
      gelombang: "",
      bulan_kelas: "",
      tahun_kelas: "",
      photo: "photo.jpg",
      phone: "",
      kaos: "",
    }
  );

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setUserInput({ [name]: newValue });
  };

  React.useEffect(() => {
    const Login = {
      email: "superprogrammer@gmail.com",
      password: "itmanager",
    };
    Axios.post("https://api.supercampprogrammer.com/api/login", Login)
      .then((res) => {
        const token = res.data[0].token;
        console.log(res.data[0].token);
        setToken(token);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const dataInput = {
      nama: userInput.nama,
      tempat_lahir: userInput.tempat_lahir,
      tanggal_lahir: userInput.tanggal_lahir,
      kota: userInput.kota,
      alamat: userInput.alamat,
      id_number: userInput.id_number,
      email: userInput.email,
      kelas: userInput.kelas,
      gelombang: userInput.gelombang,
      bulan_kelas: userInput.bulan,
      tahun_kelas: userInput.tahun_kelas,
      photo: "ok.jpg",
      phone: userInput.phone,
      kaos: userInput.kaos,
    };

    Axios({
      method: "post",
      url: "https://api.supercampprogrammer.com/api/participant",
      headers: {
        Authorization: "Bearer " + token,
      },
      data: dataInput,
    })
      .then((res) => {
        console.log(res.data);
        setUserValidation.nama(res.data[0].nama),
          setUserValidation.email(res.data.email);
        // phoneValidation: res.data.phone,
        // id_numberValidation: res.data.id_number,
        // namaValidation: res.data.nama,
        // tempat_lahirValidation: res.data.tempat_lahir,
        // tanggal_lahirValidation: res.data.tanggal_lahir,
        // kotaValidation: res.data.kota,
        // alamatValidation: res.data.alamat,
        // kelasValidation: res.data.kelas,
        // gelombangValidation: res.data.gelombang,
        // bulanValidation: res.data.bulan,
        // tahunValidation: res.data.tahun,
        // photoValidation: res.data.photo,
        // kaosValidation: res.data.kaos,
        // loading: false,
        // msg: res.data.msg,
      })

      .catch((err) => {
        // alert("Silahkan Refresh lagi dan cek koneksi anda");
      });
  };

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
          <form
            onSubmit={onSubmit}
            className={classes.form}
            // noValidate
            autoComplete="off"
          >
            <TextField
              name="nama"
              value={userInput.nama}
              onChange={handleChange}
              fullWidth="true"
              id="outlined-basic"
              label="nama"
              variant="outlined"
              style={{ marginBottom: "20px" }}
              type="text"
              required
            />
            {userValidation.nama}
            <TextField
              name="tempat_lahir"
              value={userInput.tempat_lahir}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="Tempat Lahir"
              variant="outlined"
              type="text"
              required
            />
            <TextField
              style={{ marginBottom: "20px" }}
              variant="outlined"
              fullWidth="true"
              id="date"
              label="Tanggal Lahir"
              type="date"
              name="tanggal_lahir"
              value={userInput.tanggal_lahir}
              onChange={handleChange}
              //   defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="Kota"
              variant="outlined"
              name="kota"
              value={userInput.kota}
              onChange={handleChange}
              type="text"
              required
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="Alamat Lengkap"
              variant="outlined"
              name="alamat"
              value={userInput.alamat}
              onChange={handleChange}
              type="text"
              required
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="No Identitas (KTP/SIM/PASSPORT)"
              variant="outlined"
              name="id_number"
              value={userInput.id_number}
              onChange={handleChange}
              type="number"
              required
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="No WA"
              variant="outlined"
              name="phone"
              value={userInput.phone}
              onChange={handleChange}
              type="number"
              required
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={userInput.email}
              onChange={handleChange}
              type="email"
              required
            />
            <FormControl
              style={{ marginBottom: "20px" }}
              fullWidth="true"
              className={classes.formControl}
              variant="outlined"
              label="program"
              required
            >
              <InputLabel id="demo-simple-select-label">Program</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="kelas"
                value={userInput.kelas}
                onChange={handleChange}
                required
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={1}>Membuat website responsive</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              style={{ marginBottom: "20px", width: "30%" }}
              className={classes.formControl}
              variant="outlined"
              label="gelombang"
              required
            >
              <InputLabel id="demo-simple-select-label">Gelombang</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="gelombang"
                value={userInput.gelombang}
                onChange={handleChange}
                required
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={1}>Gelombang 1</MenuItem>
                <MenuItem value={2}>Gelombang 2</MenuItem>
                <MenuItem value={3}>Gelombang 3</MenuItem>
                <MenuItem value={4}>Gelombang 4</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              style={{ marginLeft: "20px", width: "30%" }}
              className={classes.formControl}
              variant="outlined"
              label="bulan"
              required
            >
              <InputLabel id="demo-simple-select-label">Bulan</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="bulan"
                value={userInput.bulan}
                onChange={handleChange}
                required
              >
                <MenuItem value={7}>Juli</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              style={{ marginLeft: "20px", width: "30%" }}
              className={classes.formControl}
              variant="outlined"
              label="tahun"
              required
            >
              <InputLabel id="demo-simple-select-label">Tahun</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="tahun_kelas"
                value={userInput.tahun_kelas}
                required
                // value={age}
                onChange={handleChange}
              >
                <MenuItem value={2020}>2020</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              style={{ marginBottom: "20px" }}
              className={classes.formControl}
              variant="outlined"
              fullWidth="true"
              label="kaos"
              required
            >
              <InputLabel id="demo-simple-select-label">Ukuran Kaos</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="kaos"
                value={userInput.kaos}
                onChange={handleChange}
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={1}>S</MenuItem>
                <MenuItem value={2}>M</MenuItem>
                <MenuItem value={3}>L</MenuItem>
                <MenuItem value={4}>XL</MenuItem>
                <MenuItem value={5}>XXL</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
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
