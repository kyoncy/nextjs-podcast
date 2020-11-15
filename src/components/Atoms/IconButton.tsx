import IconButton from '@material-ui/core/IconButton'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon'

interface SkipForwardProps {
  onClick: () => void
  Icon: OverridableComponent<SvgIconTypeMap>
}

const SkipForward: React.FC<SkipForwardProps> = ({ onClick, Icon }) => {
  return (
    <IconButton onClick={onClick}>
      <Icon />
    </IconButton>
  )
}

export default SkipForward
