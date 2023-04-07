import Link from 'next/link'
import styled from 'styled-components'

export const TextLinkContainer = styled(Link)`
  font-family: 'Space Mono', monospace;
  text-decoration: none;
  color: ${(props) => props.theme['button-color-schema']};
  border-bottom: 2px solid transparent;
  line-height: 1.6;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme['button-color-schema']};
  }
`
