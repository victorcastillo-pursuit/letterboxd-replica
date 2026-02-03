import type { Movie } from '../types'

const TMDB_IMG = 'https://image.tmdb.org/t/p/w342'

interface Props {
  movies: Movie[]
  onSelect: (movie: Movie) => void
}

export function WatchlistGrid({ movies, onSelect }: Props) {
  if (movies.length === 0) {
    return (
      <div className="text-center text-[#9ab] py-20 px-4">
        <p className="text-lg">Your watchlist is empty.</p>
        <p className="text-sm mt-1">Add some movies to get started!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-1 p-2">
      {movies.map(movie => (
        <button
          key={movie.id}
          onClick={() => onSelect(movie)}
          className="aspect-[2/3] rounded overflow-hidden active:opacity-80 transition-opacity"
        >
          <img
            src={`${TMDB_IMG}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </button>
      ))}
    </div>
  )
}
