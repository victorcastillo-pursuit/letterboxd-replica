import { MovieCard } from './MovieCard'
import type { Movie } from '../types'

interface Props {
  movies: Movie[]
  onRemove: (id: number) => void
}

export function WatchlistGrid({ movies, onRemove }: Props) {
  if (movies.length === 0) {
    return (
      <div className="text-center text-[#9ab] py-20">
        <p className="text-lg">Your watchlist is empty.</p>
        <p className="text-sm mt-1">Browse movies below and add some!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onRemove={onRemove} />
      ))}
    </div>
  )
}
