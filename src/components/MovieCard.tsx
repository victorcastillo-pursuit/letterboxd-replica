import { useState } from 'react'
import { Eye, Heart, X } from 'lucide-react'
import type { Movie } from '../types'

const TMDB_IMG = 'https://image.tmdb.org/t/p/w342'

interface Props {
  movie: Movie
  onRemove: (id: number) => void
}

export function MovieCard({ movie, onRemove }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative aspect-[2/3] rounded-sm overflow-hidden cursor-pointer transition-all duration-150 ease-in-out"
      style={{ border: hovered ? '2px solid #00e054' : '2px solid transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`${TMDB_IMG}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-150 ease-in-out"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          opacity: hovered ? 1 : 0,
          pointerEvents: hovered ? 'auto' : 'none',
        }}
      >
        <div className="flex gap-4">
          <button className="text-white/80 hover:text-[#00e054] transition-colors">
            <Eye size={22} />
          </button>
          <button className="text-white/80 hover:text-[#ee7000] transition-colors">
            <Heart size={22} />
          </button>
          <button
            className="text-white/80 hover:text-red-500 transition-colors"
            onClick={() => onRemove(movie.id)}
          >
            <X size={22} />
          </button>
        </div>
        <span className="text-xs text-[#9ab] text-center px-2 leading-tight">
          {movie.title}
        </span>
      </div>
    </div>
  )
}
