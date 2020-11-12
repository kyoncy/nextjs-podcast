import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons/faBackward'
import Button from '../../Atoms/Button'

interface SkipBackwardProps {
  onClick: () => void
}

const SkipBackward: React.FC<SkipBackwardProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} margin={'4px'} borderRadius={'100px'}>
      <FontAwesomeIcon icon={faBackward} />
    </Button>
  )
}

export default SkipBackward
