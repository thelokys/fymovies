import styled from 'styled-components'

export const Container = styled.li`
  position: relative;
  cursor: pointer;
  border-radius: 0.5rem;

  img {
    border-radius: 0.5rem;
  }

  &:hover > img {
    opacity: 0.3;
  }
`

export const OverlayContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  background-color: ${({ theme }) => theme.colors.black400};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  text-align: center;

  text-shadow: -1px -1px 0 ${({ theme }) => theme.colors.black400},
    1px -1px 0 ${({ theme }) => theme.colors.black400},
    -1px 1px 0 ${({ theme }) => theme.colors.black400},
    1px 1px 0 ${({ theme }) => theme.colors.black400};
  border-radius: 0.5rem;
`

export const Title = styled.div`
  margin-top: 1.25rem;
  width: 7.313rem;
`

export const CurrentEpisode = styled.div`
  margin-bottom: 1.25rem;
`
