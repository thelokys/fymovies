import { useMemo } from 'react'

import { Movie } from '@/pages/index'
import { CustomPicture } from '@/ui/CustomPicture'

import { Container, OverlayContainer, Title, CurrentEpisode } from './styles'

type CardProps = {
  data: Movie
  onClick: () => void
}

export const AnimeCard = ({ data, onClick }: CardProps) => {
  const progressLabel = useMemo(() => {
    return [data.progress, data.episodes].filter((item) => !!item).join('/')
  }, [data.progress, data.episodes])

  return (
    <Container onClick={onClick}>
      <CustomPicture src={data.imageUrl} alt="card-image" />

      <OverlayContainer>
        <Title>{data.title}</Title>
        <CurrentEpisode>{progressLabel}</CurrentEpisode>
      </OverlayContainer>
    </Container>
  )
}
