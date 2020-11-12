import { useState, useEffect } from 'react'
import { Howl } from 'howler';
import InputRange from '../../Atoms/InputRange';
import formatSeconds from '../../../utils/formatSeconds'

interface AudioSeekbarProps {
  audio: Howl;
}

const AudioSeekbar: React.FC<AudioSeekbarProps> = ({
  audio,
}) => {
  const [value, setValue] = useState(0)
  let intervalId = 0;

  const updateSeekbar = () => {
    setValue(audio.seek() as number)
  }

  const onChangeSeekbar = (position: number) => {
    audio.seek(position);
  }

  useEffect(() => {
    audio.on('play', () => {
      updateSeekbar()
      clearInterval(intervalId)
      intervalId = setInterval(updateSeekbar, 1000)
    })
    audio.on('seek', () => {
      updateSeekbar()
      clearInterval(intervalId)
      intervalId = setInterval(updateSeekbar, 1000)
    })
    audio.on('pause', () => clearInterval(intervalId))
    audio.on('stop', () => clearInterval(intervalId))
  })

  return (
    <InputRange
      min={0}
      max={Math.round(audio.duration())}
      formatLabel={formatSeconds}
      value={Math.round(value)}
      onChange={onChangeSeekbar}
    />
  )
}

export default AudioSeekbar

