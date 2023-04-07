import Link from 'next/link'
import styled from 'styled-components'

export const HomeContentContainer = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
`

export const LeftEmailContainer = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  left: -180px;
  bottom: 200px;
  display: flex;
  transform: rotate(-90deg);
  .left-side {
    margin: 0;
    width: 200px;
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    .up {
      height: 50%;
      border-bottom: 2px solid ${(props) => props.theme['button-color-schema']};
    }
  }
  p {
    font-family: 'Space Mono', monospace;
    font-size: 1.2rem;
  }
`
