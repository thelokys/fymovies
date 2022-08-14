import styled from 'styled-components'

export const Content = styled.div`
  position: relative;
  width: 50rem;
  margin: 7.625rem auto 0; // top, sides, bottom
`

export const Animes = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;

  width: 100%;
  list-style-type: none;
  margin-top: 3.125rem;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`
