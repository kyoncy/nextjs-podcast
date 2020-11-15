import { useState } from 'react'
import styled from 'styled-components'
import { Howl } from 'howler'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import VolumeDown from '@material-ui/icons/VolumeDown'
import VolumeUp from '@material-ui/icons/VolumeUp'

interface VolumeSeekbarProps {
  audio: Howl
}

const StyledDiv = styled.div`
  width: 200px;
`

const VolumeSeekbar: React.FC<VolumeSeekbarProps> = ({ audio }) => {
  const [value, setValue] = useState(50)

  const handleChange = (_, newValue: number) => {
    audio.volume(newValue / 100)
    setValue(newValue)
  }

  return (
    <StyledDiv>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </StyledDiv>
  )
}

export default VolumeSeekbar
