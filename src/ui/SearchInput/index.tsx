import React, { InputHTMLAttributes } from 'react'

import { Container, Input } from './styles'

interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChangeText: (value: string) => void
}

export const SearchInput = ({ onChangeText, ...rest }: SearchInputProps) => {
  return (
    <Container>
      <Input
        {...rest}
        type="text"
        placeholder="Quick Search"
        autoComplete="off"
        onChange={({ target: { value } }) => onChangeText(value)}
      />
    </Container>
  )
}
