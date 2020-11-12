import { Howl } from 'howler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import Button from '../../Atoms/Button'

interface PlayProps {
  onClick: () => void;
};

const Play: React.FC<PlayProps> = ({
  onClick,
}) => {
  return (
    <Button onClick={onClick} margin={"4px"} borderRadius={"100px"}>
      <FontAwesomeIcon icon={faPlay} />
    </Button>
  )
}

export default Play
