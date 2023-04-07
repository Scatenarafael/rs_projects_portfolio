import React from 'react'
import { HeroContainer } from './styles'

import { TextLink } from '../TextLink'

export function SubHeader() {
  return (
    <HeroContainer>
      <p className="styled-hello">Olá, meu nome é</p>
      <h1>Rafael Scatena.</h1>
      <p className="what-can-i-do">Desenvolvo tecnologia para você.</p>
      <p className="hero-description">
        Sou um Engenheiro apaixonado por ciência e tecnologia. Atualmente, a{' '}
        <TextLink href="#" content="@Fiberwork" /> é o lar onde desenvolvo
        soluções com foco na acessibilidade e na experiência do usuário. Vamos
        trocar uma idéia?
      </p>
    </HeroContainer>
  )
}
