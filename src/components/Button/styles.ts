import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'

export const ButtonContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem;
  text-decoration: none;
  background: transparent;
  border: 1px solid ${(props) => props.theme['button-color-schema']};
  color: ${(props) => props.theme['button-color-schema']};
  min-width: 6rem;
  font-family: Space Mono, monospace;
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme['button-color-schema-hover']};
    /* color: white; */
    transition: all 0.5s ease;
  }
`
