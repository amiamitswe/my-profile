import React from 'react'
import IMG1 from '../../assets/Gallery/1.JPG'
import IMG2 from '../../assets/Gallery/2.jpg'
import classes from './MyPhoto.module.css'

const myPhotos = () => {
  return (
    <div className={classes.MyPhoto + ' w3-container w3-center w3-animate-zoom'}>
      <section className={classes.gallery}>
        <figure className={classes.gallery__item + ' ' + classes.gallery__item_1}>
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_2}>
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_3}>
          <img src={IMG2} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_4}>
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_5}>
          <img src={IMG2} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_6}>
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_7}>
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_8}>
          <img src={IMG2} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_9}>
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_10}>
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_11}>
          <img src={IMG2} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_12}>
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_13}>
          <img src={IMG1} alt="gal-1" className={classes.gallery__img} />
        </figure>

        <figure className={classes.gallery__item + ' ' + classes.gallery__item_14}>
          <img src={IMG2} alt="gal-1" className={classes.gallery__img} />
        </figure>

      </section>
    </div>
  )
}

export default myPhotos
