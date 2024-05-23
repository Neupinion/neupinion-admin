import styled from 'styled-components'

interface ButtonProps {
  label: string
  selectable: boolean
  color: string
  height: number
  width?: number | undefined
  onClick: () => void
}

const SquareButton = ({
  label,
  selectable,
  color,
  height,
  width,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      height={height}
      width={width}
      selectable={selectable}
      color={color}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default SquareButton

const Button = styled.button<{
  height: number
  width?: number | undefined
  selectable: boolean
  color: string
}>`
  width: ${({ width }) => (width === undefined ? '100%' : `${width}px`)};
  height: ${({ height }) => height}px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  color: white;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`
