import styled from 'styled-components'
import Link from 'next/link'

export const HeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export const NavContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
`

export const HeaderItem = styled(Link)`
  font-family: 'Space Mono', monospace;
  text-decoration: none;
  color: ${(props) => props.theme['text-color']};
  border-bottom: 2px solid transparent;
  padding-bottom: 0.4rem;

  &:hover {
    color: ${(props) => props.theme['button-color-schema']};
    border-bottom: 2px solid ${(props) => props.theme['button-color-schema']};
  }
`
