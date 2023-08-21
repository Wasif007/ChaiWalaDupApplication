import React from 'react'
import videoSource from "../assets/MBA Chai Wala.mp4"

const IntroVideo = () => {
  return (
    <div className="intro">
    <video  src={videoSource} loop muted autoPlay controlsList='nodownload'></video>
    <div></div>
    </div>
  )
}

export default IntroVideo
