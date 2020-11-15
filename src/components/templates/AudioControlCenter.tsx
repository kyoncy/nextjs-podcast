import { Howl } from 'howler'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import AudioPlayControlButton from '../Organisms/AudioControlButtons'
import AudioSeekbar from '../Molecules/InputRange/AudioSeekbar'
import VolumeSeekbar from '../Molecules/InputRange/VolumeSeekbar'

interface AudioControlCenterProps {
  audio: Howl
}

const AudioControlCenterWrapper = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  height: 80px;
`

const AudioControlCenter: React.FC<AudioControlCenterProps> = ({ audio }) => {
  return (
    <AudioControlCenterWrapper>
      <Grid container item sm={8} justify="center" alignItems="center">
        <AudioPlayControlButton audio={audio} />
        <AudioSeekbar audio={audio} />
      </Grid>
      <Grid container item sm={4} justify="center" alignItems="center">
        <VolumeSeekbar audio={audio} />
      </Grid>
    </AudioControlCenterWrapper>
  )
}

export default AudioControlCenter
