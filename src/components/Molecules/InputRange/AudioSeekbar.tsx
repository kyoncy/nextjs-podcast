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

  // useEffect(() => {
  //   audio.on('seek', () => {
  //     setValue(audio.seek() as number)
  //   })

  //   return () => { audio.off('seek') }
  // })

  return (
    <InputRange
      min={0}
      max={Math.round(audio.duration())}
      formatLabel={formatSeconds}
      value={value}
      onChange={setValue}
    />
  )
}

export default AudioSeekbar

