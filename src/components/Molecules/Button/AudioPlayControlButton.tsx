import { Howl } from 'howler';
import styled from 'styled-components'
import Button from '../../Atoms/Button'

interface AudioPlayControlButtonProps {
  audio: Howl;
  className?: string;
  margin?: string;
};

const Wrapper = styled.div<
  Pick<AudioPlayControlButtonProps, 'margin'>
>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin};
`;

const AudioPlayControlButton: React.FC<AudioPlayControlButtonProps> = ({
  audio,
  className,
  margin = '0 0 0 0',
}) => {
  const onClickPlay = () => {
    audio.play()
  }

  const onClickPause = () => {
    audio.pause()
  }

  return (
    <Wrapper className={className} margin={margin}>
      <Button onClick={onClickPlay} margin={"4px"}>再生</Button>
      <Button onClick={onClickPause} margin={"4px"}>停止</Button>
    </Wrapper>
  )
}

export default AudioPlayControlButton
