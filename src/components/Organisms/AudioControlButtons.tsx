import { useState } from 'react'
import { Howl } from 'howler'
import IconButton from '../Atoms/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import Replay10Icon from '@material-ui/icons/Replay10'
import Forward10Icon from '@material-ui/icons/Forward10'

interface AudioControlButtonsProps {
  audio: Howl
}

const AudioControlButtons: React.FC<AudioControlButtonsProps> = ({ audio }) => {
  const [playing, setPlaying] = useState(false)

  const onClickPlay = () => {
    if (!audio.playing()) {
      audio.play()
      setPlaying(true)
    }
  }

  const onClickPause = () => {
    if (audio.playing()) {
      audio.pause()
      setPlaying(false)
    }
  }

  const onClickSkipBackward = () => {
    const currentPos = audio.seek() as number
    const targetPos = currentPos - 10 >= 0 ? currentPos - 10 : 0

    audio.seek(targetPos)
  }

  const onClickSkipForward = () => {
    const duration = audio.duration()
    const currentPos = audio.seek() as number
    const targetPos = currentPos + 10 < duration ? currentPos + 10 : duration

    audio.seek(targetPos)
  }

  audio.on('end', () => setPlaying(false))
  audio.on('stop', () => setPlaying(false))

  return (
    <div>
      <IconButton onClick={onClickSkipBackward} Icon={Replay10Icon} />
      {playing ? (
        <IconButton onClick={onClickPause} Icon={PauseIcon} />
      ) : (
        <IconButton onClick={onClickPlay} Icon={PlayArrowIcon} />
      )}
      <IconButton onClick={onClickSkipForward} Icon={Forward10Icon} />
    </div>
  )
}

export default AudioControlButtons
