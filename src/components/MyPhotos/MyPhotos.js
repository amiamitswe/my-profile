import React from "react";
import IMG1 from "../../assets/Gallery/1.JPG";
import IMG2 from "../../assets/Gallery/2.jpg";
import IMG3 from "../../assets/Gallery/A3.jpg";
import IMG4 from "../../assets/Gallery/A4.jpg";
import IMG5 from "../../assets/Gallery/A5.jpg";
import IMG6 from "../../assets/Gallery/A6.jpg";
import IMG7 from "../../assets/Gallery/A7.jpg";
import IMG8 from "../../assets/Gallery/A8.jpg";
import IMG9 from "../../assets/Gallery/A9.jpg";
import IMG10 from "../../assets/Gallery/A10.jpg";
import IMG11 from "../../assets/Gallery/A11.jpg";
import IMG12 from "../../assets/Gallery/A12.jpg";
import IMG13 from "../../assets/Gallery/A13.jpg";
import IMG14 from "../../assets/Gallery/A14.jpg";
import classes from "./MyPhoto.module.css";

const myPhotos = () => {
  return (
    <div
      className={classes.MyPhoto + " w3-container w3-center w3-animate-zoom"}
    >
      <section className={classes.gallery}>
        <figure
          className={classes.gallery__item + " " + classes.gallery__item_1}
        >
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_2}
        >
          <img src={IMG2} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_3}
        >
          <img src={IMG3} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_4}
        >
          <img src={IMG4} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_5}
        >
          <img src={IMG5} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_6}
        >
          <img src={IMG6} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_7}
        >
          <img src={IMG7} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_8}
        >
          <img src={IMG8} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_9}
        >
          <img src={IMG9} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_10}
        >
          <img src={IMG10} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_11}
        >
          <img src={IMG11} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_12}
        >
          <img src={IMG12} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_13}
        >
          <img src={IMG13} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure
          className={classes.gallery__item + " " + classes.gallery__item_14}
        >
          <img src={IMG14} alt="gal-1" className={classes.gallery__img} />
        </figure>
      </section>
    </div>
  );
};

export default myPhotos;
