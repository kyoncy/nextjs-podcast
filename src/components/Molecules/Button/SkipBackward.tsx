import { Howl } from 'howler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from '@fortawesome/free-solid-svg-icons/faBackward';
import Button from '../../Atoms/Button'

interface SkipBackwardProps {
  audio: Howl;
};

const SkipBackward: React.FC<SkipBackwardProps> = ({
  audio,
}) => {
  const onClickSkipBackward = () => {
    const currentPos = audio.seek() as number
    const targetPos = currentPos - 10 >= 0 ? currentPos - 10 : 0

    audio.seek(targetPos)
  }

  return (
    <Button onClick={onClickSkipBackward} margin={"4px"} borderRadius={"100px"}>
      <FontAwesomeIcon icon={faBackward} />
    </Button>
  )
}

export default SkipBackward
