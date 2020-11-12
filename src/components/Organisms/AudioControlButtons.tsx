import { useState } from 'react'
import { Howl } from 'howler';
import styled from 'styled-components'
import Play from '../Molecules/Button/Play'
import Pause from '../Molecules/Button/Pause'
import SkipBackward from '../Molecules/Button/SkipBackward'
import SkipForward from '../Molecules/Button/SkipForward'

interface AudioControlButtonsProps {
  audio: Howl;
  className?: string;
  margin?: string;
};

const Wrapper = styled.div<
  Pick<AudioControlButtonsProps, 'margin'>
>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin};
`;

const AudioControlButtons: React.FC<AudioControlButtonsProps> = ({
  audio,
  className,
  margin = '0 0 0 0',
}) => {
  const [playing, setPlaying] = useState(false)

  const onClickPlay = () => {
    setPlaying(true)
    if (!audio.playing()) {
      audio.play()
    }
  }

  const onClickPause = () => {
    setPlaying(false)
    if (audio.playing()) {
      audio.pause()
    }
  }

  return (
    <Wrapper className={className} margin={margin}>
      <SkipBackward audio={audio} />
      {playing ? <Pause audio={audio} onClick={onClickPause} /> : <Play audio={audio} onClick={onClickPlay} />}
      <SkipForward audio={audio} />
    </Wrapper>
  )
}

export default AudioControlButtons
