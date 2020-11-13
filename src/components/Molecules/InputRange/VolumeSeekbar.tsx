import { useState } from 'react'
import { Howl } from 'howler'
import InputRange from '../../Atoms/InputRange'

interface VolumeSeekbarProps {
  audio: Howl
}

const VolumeSeekbar: React.FC<VolumeSeekbarProps> = ({ audio }) => {
  const [volume, setVolume] = useState(50)

  const onChangeSeekbar = (volume: number): void => {
    audio.volume(volume / 100)
    setVolume(volume)
  }

  return (
    <InputRange min={0} max={100} value={volume} onChange={onChangeSeekbar} />
  )
}

export default VolumeSeekbar
