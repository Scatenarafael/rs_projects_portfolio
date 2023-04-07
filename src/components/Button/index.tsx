import React from 'react'
import { ButtonContainer } from './styles'
import { LinkProps } from 'next/link'

interface IButtonProps extends LinkProps {
  content: string
  width?: string
}

export default function Button({
  content,
  href,
  width,
  ...props
}: IButtonProps) {
  return <ButtonContainer href={href}>{content}</ButtonContainer>
}
