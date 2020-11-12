import { Howl } from 'howler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import Button from '../../Atoms/Button'

interface PlayProps {
  audio: Howl;
  onClick: () => void;
};

const Play: React.FC<PlayProps> = ({
  audio,
  onClick,
}) => {
  return (
    <Button onClick={onClick} margin={"4px"} borderRadius={"100px"}>
      <FontAwesomeIcon icon={faPlay} />
    </Button>
  )
}

export default Play
