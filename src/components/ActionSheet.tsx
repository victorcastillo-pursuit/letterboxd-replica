import { Eye, Heart, Clock, Star } from 'lucide-react'
import type { Movie } from '../types'

const TMDB_IMG_BACKDROP = 'https://image.tmdb.org/t/p/w780'

interface Props {
  movie: Movie
  onClose: () => void
  onRemove: (id: number) => void
  onUpdate: (id: number, updates: Partial<Movie>) => void
  onReview: () => void
}

export function ActionSheet({ movie, onClose, onRemove, onUpdate, onReview }: Props) {
  const handleRemove = () => {
    onRemove(movie.id)
    onClose()
  }

  const toggleWatched = () => {
    onUpdate(movie.id, { watched: !movie.watched })
  }

  const toggleLiked = () => {
    onUpdate(movie.id, { liked: !movie.liked })
  }

  const setRating = (rating: number) => {
    // If tapping the same rating, clear it
    const newRating = movie.userRating === rating ? 0 : rating
    onUpdate(movie.id, { userRating: newRating })
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/80">
        {movie.backdrop_path && (
          <img
            src={`${TMDB_IMG_BACKDROP}${movie.backdrop_path}`}
            alt=""
            className="w-full h-full object-cover opacity-30 blur-xl"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 pt-[env(safe-area-inset-top)]">
        {/* Title */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <h2 className="text-xl font-semibold text-white text-center">
            {movie.title}
          </h2>
          <span className="text-[#9ab] mt-1">{movie.release_date}</span>
        </div>

        {/* Action Card */}
        <div className="mx-4 mb-4 bg-[#2c3440] rounded-2xl overflow-hidden">
          {/* Quick Actions */}
          <div className="flex border-b border-[#456]">
            <button
              onClick={toggleWatched}
              className="flex-1 flex flex-col items-center py-4 gap-2 active:bg-[#456] transition-colors"
            >
              <Eye
                size={28}
                className={movie.watched ? 'text-[#00e054]' : 'text-[#9ab]'}
                fill={movie.watched ? '#00e054' : 'none'}
              />
              <span className="text-[#9ab] text-xs">Watched</span>
            </button>
            <button
              onClick={toggleLiked}
              className="flex-1 flex flex-col items-center py-4 gap-2 border-x border-[#456] active:bg-[#456] transition-colors"
            >
              <Heart
                size={28}
                className={movie.liked ? 'text-[#ee7000]' : 'text-[#9ab]'}
                fill={movie.liked ? '#ee7000' : 'none'}
              />
              <span className="text-[#9ab] text-xs">Liked</span>
            </button>
            <button
              onClick={handleRemove}
              className="flex-1 flex flex-col items-center py-4 gap-2 active:bg-[#456] transition-colors"
            >
              <Clock size={28} className="text-[#40bcf4]" />
              <span className="text-[#9ab] text-xs">Watchlist</span>
            </button>
          </div>

          {/* Star Rating */}
          <div className="py-4 border-b border-[#456]">
            <span className="text-[#9ab] text-xs block text-center mb-2">Rated</span>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map(i => (
                <button
                  key={i}
                  onClick={() => setRating(i)}
                  className="active:scale-110 transition-transform"
                >
                  <Star
                    size={40}
                    className={
                      movie.userRating && i <= movie.userRating
                        ? 'text-[#00e054] fill-[#00e054]'
                        : 'text-[#456]'
                    }
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Menu Options */}
          <div className="divide-y divide-[#456]">
            <button
              onClick={onReview}
              className="w-full py-3.5 text-[#9ab] text-sm active:bg-[#456]"
            >
              Review or log
            </button>
            <button className="w-full py-3.5 text-[#9ab] text-sm active:bg-[#456]">
              Add to lists
            </button>
            <button className="w-full py-3.5 text-[#9ab] text-sm flex items-center justify-center gap-2 active:bg-[#456]">
              Change poster / backdrop
              <span className="bg-[#40bcf4] text-white text-xs px-1.5 py-0.5 rounded font-semibold">
                PATRON
              </span>
            </button>
            <button className="w-full py-3.5 text-[#9ab] text-sm active:bg-[#456]">
              Share to Instagram Stories
            </button>
            <button className="w-full py-3.5 text-[#9ab] text-sm active:bg-[#456]">
              Share
            </button>
          </div>
        </div>

        {/* Done Button */}
        <div className="mx-4 mb-4 pb-[env(safe-area-inset-bottom)]">
          <button
            onClick={onClose}
            className="w-full bg-[#2c3440] text-[#9ab] py-4 rounded-2xl text-base font-medium active:bg-[#456]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}
