import styled from 'styled-components'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  borderRadius?: string;
  color?: string;
  margin?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const StyledButton = styled.button<
  Pick<ButtonProps, 'width' | 'borderRadius' | 'color' | 'margin'>
>`
  border: 0;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  width,
  borderRadius,
  color,
  margin = '0 0 0 0',
  onClick,
  disabled,
}) => {
  return (
    <StyledButton
      className={className}
      width={width}
      borderRadius={borderRadius}
      color={color}
      margin={margin}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button
