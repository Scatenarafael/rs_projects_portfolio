import styled from 'styled-components'

export const SocialMediaLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  position: fixed;
  top: 275px;
  right: -150px;

  .up-side {
    width: 200px;
    border-bottom: 2px solid ${(props) => props.theme['button-color-schema']};
  }
  a {
    transform: rotate(-90deg);
    margin: 0rem 1rem;
  }
`
