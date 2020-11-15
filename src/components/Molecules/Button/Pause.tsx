import IconButton from '@material-ui/core/IconButton'
import PauseIcon from '@material-ui/icons/Pause'

interface PauseProps {
  onClick: () => void
}

const Pause: React.FC<PauseProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <PauseIcon />
    </IconButton>
  )
}

export default Pause
