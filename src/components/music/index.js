import React, { useState, useEffect, useRef } from 'react'
import Toast from '../toast'
import Play from './assets/play.svg'
import Pause from './assets/pause.svg'
import Next from './assets/next.svg'
import list from './list'
import './index.scss'

const getAudioSrcById = id => `https://music.163.com/song/media/outer/url?id=${id}.mp3`

const getItemById = id => list.find(item => item.id === id)

const getNextId = id => {
  const item = getItemById(id)
  const index = list.indexOf(item)
  const nextIndex = index < list.length - 1 ? index + 1 : 0

  return list[nextIndex].id
}

const getToastTip = id => {
  const { singer, name } = getItemById(id)

  return `${singer}-${name} 播放中`
}

const Music = () => {
  const [id, setId] = useState(list[0].id)
  const [playing, setPlaying] = useState(false)
  const [canPlay, setCanPlay] = useState(false)
  const audioRef = useRef()

  const handleNext = () => {
    setPlaying(true)
    setCanPlay(false)
    setId(getNextId(id))
  }

  useEffect(() => {
    if (!playing) {
      return audioRef.current.pause()
    }

    if (canPlay) {
      Toast.show(getToastTip(id))
      audioRef.current.play()
    }
  }, [id, playing, canPlay])

  return (
    <div className="music">
      {
        canPlay
          ? !playing
            ? <img
                className="option-item play"
                src={Play}
                alt="play-icon"
                onClick={() => {
                  setPlaying(true)
                  audioRef.current.muted = false
                }}
              />
            : <img
                className="option-item pause"
                src={Pause}
                alt="pause-icon"
                onClick={() => setPlaying(false)}
              />
          : <img
              src="http://zhuangtianyu.com/image/1595397636000.png"
              className="option-item loading-icon"
              alt="loading-icon"
            />
      }
      <img
        className="option-item next"
        src={Next}
        alt="play-icon"
        onClick={() => {
          handleNext()
          audioRef.current.muted = false
        }}
      />
      <audio
        src={getAudioSrcById(id)}
        ref={audioRef}
        onCanPlayThrough={() => setCanPlay(true)}
        preload="auto"
        autoPlay
        muted
        loop
      />
    </div>
  )
}

export default Music
