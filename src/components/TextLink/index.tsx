import React, { ReactNode } from 'react'
import { TextLinkContainer } from './styles'
import { LinkProps } from 'next/link'

interface ITextLinkProps extends LinkProps {
  content: string | ReactNode
}

export function TextLink({ content, href, as, ...props }: ITextLinkProps) {
  return (
    <TextLinkContainer href={href} {...props}>
      {content}
    </TextLinkContainer>
  )
}
