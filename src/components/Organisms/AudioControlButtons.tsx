import { useState } from 'react'
import { Howl } from 'howler'
import styled from 'styled-components'
import Play from '../Molecules/Button/Play'
import Pause from '../Molecules/Button/Pause'
import SkipBackward from '../Molecules/Button/SkipBackward'
import SkipForward from '../Molecules/Button/SkipForward'

interface AudioControlButtonsProps {
  audio: Howl
  className?: string
  margin?: string
}

const Wrapper = styled.div<Pick<AudioControlButtonsProps, 'margin'>>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin};
`

const AudioControlButtons: React.FC<AudioControlButtonsProps> = ({
  audio,
  className,
  margin = '0 0 0 0',
}) => {
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
    <Wrapper className={className} margin={margin}>
      <SkipBackward onClick={onClickSkipBackward} />
      {playing ? (
        <Pause onClick={onClickPause} />
      ) : (
        <Play onClick={onClickPlay} />
      )}
      <SkipForward onClick={onClickSkipForward} />
    </Wrapper>
  )
}

export default AudioControlButtons
