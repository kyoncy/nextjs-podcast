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

  const onClickBackSkip = () => {
    const currentPos = audio.seek() as number
    const targetPos = currentPos - 10 >= 0 ? currentPos - 10 : 0

    audio.seek(targetPos)
  }

  const onClickForwardSkip = () => {
    const duration = audio.duration()

    const currentPos = audio.seek() as number
    const targetPos = currentPos + 10 < duration ? currentPos + 10 : duration

    audio.seek(targetPos)
  }

  return (
    <Wrapper className={className} margin={margin}>
      <Button onClick={onClickBackSkip} margin={"4px"}>10秒戻す</Button>
      <Button onClick={onClickPlay} margin={"4px"}>再生</Button>
      <Button onClick={onClickPause} margin={"4px"}>停止</Button>
      <Button onClick={onClickForwardSkip} margin={"4px"}>10秒進める</Button>
    </Wrapper>
  )
}

export default AudioPlayControlButton
