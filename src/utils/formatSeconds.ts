const formatSeconds = (seconds: number): string => {
  const mm = ('00' + Math.floor(seconds / 60)).slice(-2)
  const ss = ('00' + (seconds % 60)).slice(-2)

  return mm + ':' + ss
}

export default formatSeconds
