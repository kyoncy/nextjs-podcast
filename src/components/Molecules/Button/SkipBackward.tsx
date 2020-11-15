import IconButton from '@material-ui/core/IconButton'
import FastRewindIcon from '@material-ui/icons/FastRewind'

interface SkipBackwardProps {
  onClick: () => void
}

const SkipBackward: React.FC<SkipBackwardProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <FastRewindIcon />
    </IconButton>
  )
}

export default SkipBackward
