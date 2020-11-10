import { useEffect } from 'react'
import { Howl } from 'howler';
import styled from 'styled-components'
import Button from '../../Atoms/Button'
// TODO: 仮でここにオーディオファイル置いてるだけなので適切な場所に
import sample from '../../../audio/sample.mp3'

interface AudioPlayControlButtonProps {
  classname?: string;
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
  classname,
  margin = '0 0 0 0',
}) => {
  let audio: Howl

  useEffect(() => {
    audio = new Howl({
      src: [sample],
      autoplay: false,
      loop: true,
      volume: 0.5,
      onend: () => {
        console.log('Finished!');
      }
    });
  })

  const onClickPlay = () => {
    audio.play()
  }

  const onClickPause = () => {
    audio.pause()
  }

  return (
    <Wrapper classname={classname} margin={margin}>
      <Button onClick={onClickPlay}>再生</Button>
      <Button onClick={onClickPause}>停止</Button>
    </Wrapper>
  )
}

export default AudioPlayControlButton
