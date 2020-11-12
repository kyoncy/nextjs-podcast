import { Howl } from 'howler';
import Button from '../../Atoms/Button'

interface PlayProps {
  audio: Howl;
};

const Play: React.FC<PlayProps> = ({
  audio,
}) => {
  const onClickPlay = () => {
    if (!audio.playing()) {
      audio.play()
    }
  }

  return (
    <Button onClick={onClickPlay} margin={"4px"}>再生</Button>
  )
}

export default Play
