import styled from 'styled-components'

export const AboutContainer = styled.section`
  margin: 0 auto 10rem auto;
  max-width: 80vw;
`

export const AboutHeader = styled.header`
  margin: auto;
  p {
    font-family: 'Space Mono', monospace;
    font-size: 2rem;
    padding: 1rem 2rem;
  }
`

export const AboutBody = styled.div`
  height: 100%;
  display: flex;
`

export const HeroBodySide = styled.div`
  width: 70%;
  display: flex;
  p {
    text-align: justify;
    max-width: 40rem;
    margin: 1rem 2rem;
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
  }
`

export const PreviewBodySide = styled.div`
  height: 100%;
  width: 40%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  .img-border {
    position: absolute;
    top: 0;
    color: black;
    margin-top: -7rem;
    margin-right: -2.5rem;
    z-index: -1;
    height: 380px;
    width: 300px;
    border-radius: 20%;
    background-color: ${(props) => props.theme['button-color-schema-hover']};
    border: 2px solid ${(props) => props.theme['button-color-schema']};
  }

  img {
    margin-top: -8rem;
    filter: contrast(1.75) sepia(1) grayscale(1);
    border-radius: 20%;
  }
`

export const AboutFooter = styled.footer`
  padding: 1rem 2rem;
  p {
    text-align: justify;
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
  }

  .tech-container {
    display: flex;
    margin: 1rem 0;

    .block-technologies {
      min-height: 200px;
      margin: 1rem;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px dashed ${(props) => props.theme['button-color-schema']};
      border-radius: 15px;

      p {
        margin: 2rem;
        color: ${(props) => props.theme['button-color-schema']};
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 8px;
        font-weight: bold;
      }
    }

    .tech-lists {
      display: grid;
      margin: 1rem;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 1rem;
      column-gap: 1.5rem;
      font-family: 'Space Mono', monospace;
      font-size: 0.8rem;

      div {
        display: flex;
        align-items: center;
        .list-icon {
          color: ${(props) => props.theme['button-color-schema']};
          margin-right: 0.5rem;
        }
      }
    }
  }
`
