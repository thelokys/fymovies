import type { NextPage } from 'next'
import { useState } from 'react'
import { MdOutlineAdd } from 'react-icons/md'

import { FormMovieData, MovieCreate } from '@/ui/Modal/MovieCreate'
import { SearchInput } from '@/ui/SearchInput'
import { useEffect } from 'react'
import ReactModal from 'react-modal'
import styles from './home.module.scss'

import { Animes, Content } from './styles'
import { AnimeCard } from '@/ui/AnimeCard'

const modalStyles: ReactModal.Styles = {
  content: {
    width: 614,
    height: 383,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#5D526A',
    borderRadius: 8,
    borderWidth: 0,
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}

export type Movie = {
  id: string
  title: string
  episodes: number
  progress: number
  imageUrl: string
}

const Home: NextPage = () => {
  const [search, setSearch] = useState('')

  const keyStorage = '@movie:thelokys'

  const saveAll = (data: Movie[]) => {
    try {
      const jsonValue = JSON.stringify(data)
      localStorage.setItem(keyStorage, jsonValue)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const retrieveOffline = (): Movie[] => {
    const item = localStorage.getItem(keyStorage)
    console.log({ item })
    return item ? JSON.parse(item) : []
  }

  const [movies, setMovies] = useState<Movie[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const [editedMovie, setEditedMovie] = useState({} as Movie)

  const searchBy = (search: string, text: string) => {
    return text.toLowerCase().indexOf(search.toLowerCase()) !== -1
  }

  const filteredMovies = search?.length
    ? movies.filter((movie) => searchBy(search, movie.title))
    : movies

  const handleEditMovie = (value: Movie) => {
    setEditedMovie(value)
    setIsOpen(true)
  }

  const handleMovieSubmit = (data: FormMovieData) => {
    if (!data.id) {
      const newMovie: Movie = {
        id: new Date().getMilliseconds().toString(),
        ...data,
      }
      setMovies((prevState) => {
        const newMovies = [...prevState, newMovie]
        saveAll(newMovies)
        return newMovies
      })
    } else {
      setMovies((prevState) => {
        const updateMovies = prevState.map((movie) =>
          movie.id === data.id ? { ...movie, ...data } : movie,
        )
        saveAll(updateMovies)
        return updateMovies
      })
    }

    setIsOpen(false)
  }

  const handleRequestClose = () => {
    setIsOpen(false)
    setEditedMovie({} as Movie)
  }

  const handleMovieDelete = (data: FormMovieData) => {
    setMovies((prevState) => {
      const newMovies = prevState.filter((movie) => movie.id !== data.id)
      saveAll(newMovies)
      return newMovies
    })
  }

  useEffect(() => {
    setMovies(retrieveOffline())
  }, [])

  return (
    <Content>
      <SearchInput name="search" value={search} onChangeText={setSearch} />

      <ReactModal
        isOpen={isOpen}
        style={modalStyles}
        ariaHideApp={false}
        onRequestClose={handleRequestClose}
      >
        <MovieCreate
          initialValues={editedMovie}
          onDelete={handleMovieDelete}
          onSubmit={handleMovieSubmit}
          onRequestClose={handleRequestClose}
        />
      </ReactModal>

      <Animes>
        {filteredMovies.map((movie) => (
          <AnimeCard
            key={movie.id}
            data={movie}
            onClick={() => handleEditMovie(movie)}
          />
        ))}
      </Animes>

      <button className={styles.btnAdd} onClick={() => setIsOpen(true)}>
        <MdOutlineAdd size={24} />
      </button>
    </Content>
  )
}

export default Home
