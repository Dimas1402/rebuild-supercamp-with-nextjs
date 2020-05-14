import { makeStyles } from "@material-ui/core/styles";
import Swiper from "swiper";

const useStyles = makeStyles({
  img: {
    width: 400,
    height: 250,
  },
  text: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "white",
  },
  iconSwipe: {
    width: "100px",
    height: "100px",
    marginTop: "-50px",
    marginLeft: "20px",
  },
  textSwipe: {
    color: "white",
    fontSize: "10px",
    marginTop: "-5px",
  },
  div: {
    display: "flex",
    flexDirection: "row-reverse",
  },
});
const Portofolio = () => {
  const classes = useStyles();
  const [sizeWindow, setSizeWindow] = React.useState(0);

  React.useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: sizeWindow < 1200 ? 1 : 3,
      spaceBetween: 30,
      slidesPerGroup: sizeWindow < 1200 ? 1 : 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    setSizeWindow(document.documentElement.clientWidth);
    console.log("ukuran", sizeWindow);
  }, [sizeWindow]);

  const betaChat = require("../../../Assets/portofolio/beta.png");
  const osans = require("../../../Assets/portofolio/osans.png");
  const event = require("../../../Assets/portofolio/event.png");
  const gchat = require("../../../Assets/portofolio/gchat.png");
  const chat = require("../../../Assets/portofolio/chat.png");
  const pos = require("../../../Assets/portofolio/pos.png");
  const pos2 = require("../../../Assets/portofolio/pos2.png");
  const geser = require("../../../Assets/geser.png");
  return (
    <>
      <p className={classes.text}>Portofolio</p>
      <div style={{ margin: "50px" }} className="swiper-container">
        <div className="swiper-wrapper">
          {[betaChat, osans, event, gchat, chat, pos, pos2].map(
            (img, index) => (
              <div className="swiper-slide">
                <img className={classes.img} src={img} />
              </div>
            )
          )}
        </div>
        {/* Add Pagination */}
        <div className="swiper-pagination" />
        {/* Add Arrows */}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
      <div>
        <img className={classes.iconSwipe} src={geser} />
        <p className={classes.textSwipe}>Geser untuk melihat lebih banyak</p>
      </div>
    </>
  );
};

export default Portofolio;
