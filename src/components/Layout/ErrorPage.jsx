import React from 'react'
import classes from './ErrorPage.module.css'
import Lottie from 'react-lottie'
import cat from '../../assets/cat.json'

const ErrorPage = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cat,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <React.Fragment>
      <div className={classes.errorContainer}>
        <div className={classes.header}>
          <h1>This Cat ate your meals</h1>
          <p>Please reload while we prepare another meal <br />and get this Cat away</p>
        </div>
        <div className={classes.coverImg}>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ErrorPage