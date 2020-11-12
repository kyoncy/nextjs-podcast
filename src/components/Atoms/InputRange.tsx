import ReactInputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

interface InputRangeProps {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
  formatLabel?: (value: number) => string
  disabled?: boolean
}

const InputRange: React.FC<InputRangeProps> = ({
  min,
  max,
  value,
  onChange,
  formatLabel,
  disabled = false,
}) => {
  return (
    <ReactInputRange
      minValue={min}
      maxValue={max}
      disabled={disabled}
      formatLabel={formatLabel}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputRange
