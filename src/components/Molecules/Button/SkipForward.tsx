import { Howl } from 'howler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from '@fortawesome/free-solid-svg-icons/faForward';
import Button from '../../Atoms/Button'

interface SkipForwardProps {
  audio: Howl;
};

const SkipForward: React.FC<SkipForwardProps> = ({
  audio,
}) => {
  const onClickSkipForward = () => {
    const duration = audio.duration()

    const currentPos = audio.seek() as number
    const targetPos = currentPos + 10 < duration ? currentPos + 10 : duration

    audio.seek(targetPos)
  }

  return (
    <Button onClick={onClickSkipForward} margin={"4px"} borderRadius={"100px"}>
      <FontAwesomeIcon icon={faForward} />
    </Button>
  )
}

export default SkipForward
