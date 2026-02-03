import { useState } from 'react'
import { Plus } from 'lucide-react'
import { sampleMovies } from '../data/sampleMovies'
import type { Movie } from '../types'

const TMDB_IMG = 'https://image.tmdb.org/t/p/w154'

interface Props {
  isInWatchlist: (id: number) => boolean
  onAdd: (movie: Omit<Movie, 'added_at'>) => void
}

export function MovieSearch({ isInWatchlist, onAdd }: Props) {
  const [query, setQuery] = useState('')

  const filtered = sampleMovies.filter(
    m => !isInWatchlist(m.id) && m.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies to add..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full bg-[#2c3440] text-white placeholder-[#9ab] rounded px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-[#00e054] mb-4"
      />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {filtered.map(movie => (
          <button
            key={movie.id}
            onClick={() => onAdd({ id: movie.id, title: movie.title, poster_path: movie.poster_path })}
            className="group relative aspect-[2/3] rounded-sm overflow-hidden"
          >
            <img
              src={`${TMDB_IMG}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 flex items-center justify-center transition-all duration-150">
              <Plus className="text-[#00e054] opacity-0 group-hover:opacity-100 transition-opacity duration-150" size={28} />
            </div>
          </button>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-[#9ab] text-sm text-center py-4">
          {query ? 'No matches found.' : 'All movies added to watchlist!'}
        </p>
      )}
    </div>
  )
}
