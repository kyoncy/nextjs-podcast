import { Howl } from 'howler';
import Button from '../../Atoms/Button'

interface PauseProps {
  audio: Howl;
};

const Pause: React.FC<PauseProps> = ({
  audio,
}) => {
  const onClickPause = () => {
    if (audio.playing()) {
      audio.pause()
    }
  }

  return (
    <Button onClick={onClickPause} margin={"4px"}>一時停止</Button>
  )
}

export default Pause
