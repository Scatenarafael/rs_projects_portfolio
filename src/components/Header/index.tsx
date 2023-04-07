import React from 'react'
import { HeaderContainer, HeaderItem, NavContainer } from './styles'
import Button from '../Button'

export function Header() {
  return (
    <HeaderContainer>
      <Button content="Currículo" href="#" width="8rem" />
      <NavContainer>
        <HeaderItem href="#about">Sobre</HeaderItem>
        <HeaderItem href="#">Experiências Profissionais</HeaderItem>
        <HeaderItem href="#">Projetos</HeaderItem>
        <HeaderItem href="#">Contato</HeaderItem>
      </NavContainer>
    </HeaderContainer>
  )
}
