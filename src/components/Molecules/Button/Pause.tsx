import { Howl } from 'howler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import Button from '../../Atoms/Button'

interface PauseProps {
  onClick: () => void;
};

const Pause: React.FC<PauseProps> = ({
  onClick,
}) => {
  return (
    <Button onClick={onClick} margin={"4px"} borderRadius={"100px"}>
      <FontAwesomeIcon icon={faPause} />
    </Button>
  )
}

export default Pause
