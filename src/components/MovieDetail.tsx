import { ChevronLeft, MoreHorizontal, Play, Star } from 'lucide-react'
import type { Movie } from '../types'

const TMDB_IMG_BACKDROP = 'https://image.tmdb.org/t/p/w780'
const TMDB_IMG_POSTER = 'https://image.tmdb.org/t/p/w342'

interface Props {
  movie: Movie
  onBack: () => void
  onShowActions: () => void
}

export function MovieDetail({ movie, onBack, onShowActions }: Props) {
  const stars = movie.rating ? Math.round(movie.rating) : 0

  return (
    <div className="flex flex-col min-h-screen bg-[#14181c] pb-16">
      {/* Backdrop */}
      <div className="relative h-72">
        {movie.backdrop_path && (
          <img
            src={`${TMDB_IMG_BACKDROP}${movie.backdrop_path}`}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#14181c]" />

        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 pt-[env(safe-area-inset-top)]">
          <button onClick={onBack} className="text-white">
            <ChevronLeft size={28} />
          </button>
          <button onClick={onShowActions} className="text-white">
            <MoreHorizontal size={28} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 -mt-16 relative">
        <div className="flex gap-4">
          {/* Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white leading-tight">
              {movie.title}
            </h1>
            <div className="mt-2 text-[#9ab] text-sm">
              <span>{movie.release_date}</span>
              {movie.director && (
                <>
                  <span className="mx-2">•</span>
                  <span className="uppercase text-xs tracking-wide">Directed by</span>
                  <div className="text-white font-semibold">{movie.director}</div>
                </>
              )}
            </div>
            <div className="flex items-center gap-3 mt-3">
              <button className="flex items-center gap-1 bg-[#2c3440] px-3 py-1.5 rounded text-white text-sm">
                <Play size={14} fill="white" />
                <span>TRAILER</span>
              </button>
              {movie.runtime && (
                <span className="text-[#9ab] text-sm">{movie.runtime} mins</span>
              )}
            </div>
          </div>

          {/* Poster */}
          <div className="w-28 flex-shrink-0">
            <img
              src={`${TMDB_IMG_POSTER}${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded shadow-lg"
            />
          </div>
        </div>

        {/* Tagline / Overview */}
        {movie.overview && (
          <div className="mt-6">
            <p className="text-[#9ab] text-sm uppercase tracking-wide leading-relaxed">
              {movie.overview.slice(0, 120).toUpperCase()}...
            </p>
            <p className="text-[#9ab] text-sm mt-3 leading-relaxed">
              {movie.overview}
            </p>
          </div>
        )}

        {/* Ratings Section */}
        <div className="mt-8 py-4 border-t border-[#2c3440]">
          <span className="text-[#9ab] text-xs uppercase tracking-wide">Ratings</span>
          <div className="flex items-end justify-between mt-2">
            {/* Histogram placeholder */}
            <div className="flex items-end gap-0.5 h-12">
              {[1, 2, 3, 5, 8, 12, 18, 15, 10, 6].map((h, i) => (
                <div
                  key={i}
                  className="w-4 bg-[#456] rounded-t"
                  style={{ height: `${h * 3}px` }}
                />
              ))}
            </div>
            <div className="text-right">
              <span className="text-white text-2xl font-semibold">{movie.rating?.toFixed(1) || '—'}</span>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    size={14}
                    className={i <= stars ? 'text-[#00e054] fill-[#00e054]' : 'text-[#456]'}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* User Rating */}
        <div className="mt-4 bg-[#2c3440] rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#456] rounded-full" />
            <span className="text-[#9ab] text-sm">You've rated this film</span>
          </div>
          <div className="flex gap-0.5">
            {[1, 2, 3].map(i => (
              <Star key={i} size={16} className="text-[#00e054] fill-[#00e054]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
