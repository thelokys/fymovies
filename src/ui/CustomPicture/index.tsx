import React, { ImgHTMLAttributes, SyntheticEvent } from 'react'

import { Image } from './styles'

interface PictureProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onError'> {}

export const CustomPicture = ({ src, ...rest }: PictureProps) => {
  const defaultNotFoundSvg = '/not-found.svg'

  const getImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = defaultNotFoundSvg
  }

  return (
    <Image {...rest} src={src ?? defaultNotFoundSvg} onError={getImageError} />
  )
}
