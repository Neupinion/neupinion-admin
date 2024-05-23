import styled from 'styled-components'

interface SpacingProps {
  direction: 'horizontal' | 'vertical'
  size: number
}

const Spacing = styled.div<SpacingProps>`
  flex: none;
  min-width: ${({ direction, size }) =>
    direction === 'horizontal' ? size : 0}px;
  min-height: ${({ direction, size }) =>
    direction === 'vertical' ? size : 0}px;
`

export default Spacing
