import IconButton from '@material-ui/core/IconButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

interface PlayProps {
  onClick: () => void
}

const Play: React.FC<PlayProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <PlayArrowIcon />
    </IconButton>
  )
}

export default Play
