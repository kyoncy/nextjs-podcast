import { Howl } from 'howler';
import Button from '../../Atoms/Button'

interface SkipBackProps {
  audio: Howl;
};

const SkipBack: React.FC<SkipBackProps> = ({
  audio,
}) => {
  const onClickSkipBack = () => {
    const currentPos = audio.seek() as number
    const targetPos = currentPos - 10 >= 0 ? currentPos - 10 : 0

    audio.seek(targetPos)
  }

  return (
    <Button onClick={onClickSkipBack} margin={"4px"}>10秒戻す</Button>
  )
}

export default SkipBack
