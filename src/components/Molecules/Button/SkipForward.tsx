import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from '@fortawesome/free-solid-svg-icons/faForward'
import Button from '../../Atoms/Button'

interface SkipForwardProps {
  onClick: () => void
}

const SkipForward: React.FC<SkipForwardProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} margin={'4px'} borderRadius={'100px'}>
      <FontAwesomeIcon icon={faForward} />
    </Button>
  )
}

export default SkipForward
