import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    name: "Al baihaqi",
    text:
      "Ngoding itu tidak sesulit apa yang saya bayangkan. Dengan arahan mentor dan teman-teman yang saling memotivasi, saya bisa sampai sejauh ini. Saya sudah dapat mengerti apa itu pseudo code, algoritma, serta logic dalam programming.",
  },
  {
    name: "Roihan Mishbahul Anam",
    text:
      "Alhamdulillah dengan mengikuti kurikulum yang ada di sini, saya bisa menjadi lebih berkembang dengan adanya mentor dan Alhamdulillah lingkungannya sudah islami dan banyak teman-teman yang sholeh in syaa Allah.",
  },
  {
    name: "Muhammad Sidik",
    text:
      "Sebelum ikut pelatihan disini, saya tidak memiliki keahlian programming, maka saya berkeinginan untuk belajar dan disini tidak perlu waktu lama saya sudah dapat menguasai programming.",
  },
  {
    name: "Muhammad Wahyudi",
    text:
      "Alhamdulillah selama disini saya mendapat banyak arahan ilmu programming dari mentor dan juga didukung oleh lingkungan yang nyaman.",
  },
  {
    name: "Amar Khoirudin",
    text:
      "Setelah Mengikuti Kurikulum yang ada disini akhirnya saya banyak mengetahui tentang programmer.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
    overflow: "hidden",
    marginTop: "-60px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 200,
    display: "block",
    width: 200,
    overflow: "hidden",
    margin: "0 auto",
    borderRadius: "50%",
    boxShadow: "10px 10px 50px -20px rgba(0,0,0,.75)",
  },
  textName: {
    fontWeight: "bold",
    fontSize: "15px",
  },
  textTes: {
    fontWeight: "300",
    fontSize: "14px",
    color: "#848484",
  },
  span: {
    fontSize: "25px",
  },
}));

function Testimoni() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const sidik = require("../../../Assets/testimoni/sidik.jpg");
  const roihan = require("../../../Assets/testimoni/roihan.jpg");
  const bae = require("../../../Assets/testimoni/bae.jpg");
  const wahyudi = require("../../../Assets/testimoni/wahyudi.jpg");
  const amar = require("../../../Assets/testimoni/amar.png");

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        {/* <Typography>{tutorialSteps[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <img
                  className={classes.img}
                  src={
                    index === 0
                      ? bae
                      : index === 1
                      ? roihan
                      : index === 2
                      ? sidik
                      : index === 3
                      ? wahyudi
                      : amar
                  }
                  alt=""
                />
                <p className={classes.textName} style={{ textAlign: "center" }}>
                  {step.name}
                </p>
                <p className={classes.textTes} style={{ textAlign: "center" }}>
                  <span className={classes.span}>&#128630;</span> {step.text}
                  <span className={classes.span}> &#128631;</span>
                </p>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </div>
  );
}

export default Testimoni;
