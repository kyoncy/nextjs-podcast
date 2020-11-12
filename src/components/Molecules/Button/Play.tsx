import { Howl } from 'howler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
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
    <Button onClick={onClickPlay} margin={"4px"} borderRadius={"100px"}>
      <FontAwesomeIcon icon={faPlay} />
    </Button>
  )
}

export default Play
