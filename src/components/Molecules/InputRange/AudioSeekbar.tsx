import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Howl } from 'howler'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import formatSeconds from '../../../utils/formatSeconds'

interface AudioSeekbarProps {
  audio: Howl
}

const StyledDiv = styled.div`
  width: 400px;
`

const AudioSeekbar: React.FC<AudioSeekbarProps> = ({ audio }) => {
  const [value, setValue] = useState(0)
  let intervalId = 0

  const updateSeekbar = () => {
    setValue(audio.seek() as number)
  }

  const onChangeSeekbar = (_, position: number) => {
    audio.seek(position)
  }

  useEffect(() => {
    audio.on('play', () => {
      updateSeekbar()
      clearInterval(intervalId)
      intervalId = setInterval(updateSeekbar, 1000)
    })
    audio.on('seek', () => {
      updateSeekbar()
      clearInterval(intervalId)
      intervalId = setInterval(updateSeekbar, 1000)
    })
    audio.on('pause', () => clearInterval(intervalId))
    audio.on('stop', () => clearInterval(intervalId))
  })

  return (
    <StyledDiv>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="caption" display="block" gutterBottom>
            {formatSeconds(Math.round(value))}
          </Typography>
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={onChangeSeekbar}
            aria-labelledby="discrete-slider-custom"
            max={Math.round(audio.duration())}
          />
        </Grid>
        <Grid item>
          <Typography variant="caption" display="block" gutterBottom>
            {formatSeconds(Math.round(audio.duration()))}
          </Typography>
        </Grid>
      </Grid>
    </StyledDiv>
  )
}

export default AudioSeekbar
