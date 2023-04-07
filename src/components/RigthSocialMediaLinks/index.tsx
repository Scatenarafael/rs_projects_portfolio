import React from 'react'
import { SocialMediaLinksContainer } from './styles'
import { TextLink } from '../TextLink'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'

export default function RigthSocialMediaLinks() {
  return (
    <SocialMediaLinksContainer>
      <div className="up-side">
        <div className="right" />
        <div />
      </div>
      <TextLink href="#" content={<AiFillGithub size={32} />} />{' '}
      <TextLink href="#" content={<AiFillLinkedin size={32} />} />{' '}
      <TextLink href="#" content={<AiOutlineInstagram size={32} />} />{' '}
    </SocialMediaLinksContainer>
  )
}
