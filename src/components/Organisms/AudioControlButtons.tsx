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
  return (
    <Wrapper className={className} margin={margin}>
      <SkipBackward audio={audio} />
      <Play audio={audio} />
      <Pause audio={audio} />
      <SkipForward audio={audio} />
    </Wrapper>
  )
}

export default AudioControlButtons
