import styled from 'styled-components'

// export const SubHeaderContainer = styled.section`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 2rem 0;
//   padding: 0;
// `

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  .styled-hello {
    font-family: 'Space Mono', monospace;
    font-size: 1.2rem;
    color: ${(props) => props.theme['button-color-schema']};
    margin: 1rem 0;
  }
  h1 {
    font-size: 6rem;
    margin-top: 1rem;
  }
  .what-can-i-do {
    font-size: 4rem;
    line-height: 0.9;
    margin: 1rem 0;
  }
  .hero-description {
    font-size: 1.2rem;
    text-align: justify;
    margin-top: 1rem;
    max-width: 60rem;
  }
`

// export const PreviewContainer = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     filter: contrast(1.75) sepia(1) grayscale(1);
//     border-radius: 20%;
//   }
// `
