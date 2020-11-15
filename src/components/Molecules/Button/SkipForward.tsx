import IconButton from '@material-ui/core/IconButton'
import FastForwardIcon from '@material-ui/icons/FastForward'

interface SkipForwardProps {
  onClick: () => void
}

const SkipForward: React.FC<SkipForwardProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <FastForwardIcon />
    </IconButton>
  )
}

export default SkipForward
