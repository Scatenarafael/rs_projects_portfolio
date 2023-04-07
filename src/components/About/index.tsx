import React from 'react'
import {
  AboutBody,
  AboutContainer,
  AboutFooter,
  AboutHeader,
  HeroBodySide,
  PreviewBodySide,
} from './styles'
import previewImage from '../../assets/main-home.jpeg'
import Image from 'next/image'
import {
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiRubyonrails,
  SiTsnode,
  SiPrisma,
  SiPostgresql,
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandRedux, TbBrandRadixUi } from 'react-icons/tb'
import { RxStitchesLogo } from 'react-icons/rx'

export default function About() {
  return (
    <AboutContainer id="about">
      <AboutHeader>
        <p> Sobre Mim </p>
      </AboutHeader>
      <AboutBody>
        <HeroBodySide>
          <p>
            Engenheiro Químico, Mestre pela Universidade Estadual de Campinas
            (UNICAMP), e graduado em Engenharia Química pela Universidade
            Federal de Uberlândia (UFU). Atualmente, desenvolve aplicações web,
            fazendo uso da linguagem Java Script com ênfase na biblioteca
            ReactJS. Experiência na gestão administrativa do setor produtivo de
            supermercados (Padaria, Açougue, Hortifruti). Experiência de 3 anos
            na gestão administrativa e comercial de uma distribuidora de
            produtos alimentícios que atendia mais de 80 cidades na região de
            Fernandópolis, Votuporanga - SP e Santa Fé do Sul - SP
          </p>
        </HeroBodySide>
        <PreviewBodySide>
          <Image
            src={previewImage}
            width="300"
            quality={100}
            priority
            alt="Foto do meu Rosto. Cabelo Preto, barba, não muito obeso, nem muito magro"
          />
          <div className="img-border">.</div>
        </PreviewBodySide>
      </AboutBody>
      <AboutFooter>
        <p>
          Estas são algumas das tecnologias que estive trabalhando atualmente:{' '}
        </p>
        <div className="tech-container">
          <div className="block-technologies">
            <p>Front-end</p>
            <div className="tech-lists">
              <div>
                <SiJavascript size={25} className="list-icon" /> JavaScript
              </div>
              <div>
                {' '}
                <SiTypescript size={25} className="list-icon" /> TypeScript
              </div>
              <div>
                <TbBrandNextjs size={25} className="list-icon" /> NextJS
              </div>
              <div>
                <TbBrandRedux size={25} className="list-icon" /> Redux
              </div>
              <div>
                <SiStyledcomponents size={20} className="list-icon" />{' '}
                Styled-Components
              </div>
              <div>
                <RxStitchesLogo size={25} className="list-icon" /> Stitches-UI
              </div>
              <div>
                <TbBrandRadixUi size={25} className="list-icon" /> Radix-UI
              </div>
            </div>
          </div>
          <div className="block-technologies">
            <p>Back-end</p>
            <div className="tech-lists">
              <div>
                <SiRubyonrails size={25} className="list-icon" /> Ruby on Rails
              </div>
              <div>
                <SiTsnode size={25} className="list-icon" /> NodeTS
              </div>
              <div>
                <SiPrisma size={25} className="list-icon" /> Prisma - IO
              </div>
              <div>
                <SiPostgresql size={25} className="list-icon" />
                PostgreSQL
              </div>
            </div>
          </div>
        </div>
      </AboutFooter>
    </AboutContainer>
  )
}
