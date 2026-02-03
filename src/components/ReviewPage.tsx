import { useState } from 'react'
import { ChevronLeft, Star, Eye, Heart, Calendar } from 'lucide-react'
import type { Movie } from '../types'

const TMDB_IMG_POSTER = 'https://image.tmdb.org/t/p/w154'

interface Props {
  movie: Movie
  onBack: () => void
  onSave: (id: number, updates: Partial<Movie>) => void
}

export function ReviewPage({ movie, onBack, onSave }: Props) {
  const [review, setReview] = useState(movie.review || '')
  const [userRating, setUserRating] = useState(movie.userRating || 0)
  const [watched, setWatched] = useState(movie.watched || false)
  const [liked, setLiked] = useState(movie.liked || false)
  const [watchedDate, setWatchedDate] = useState(
    movie.watchedDate || new Date().toISOString().split('T')[0]
  )

  const handleSave = () => {
    onSave(movie.id, {
      review,
      userRating,
      watched,
      liked,
      watchedDate,
    })
    onBack()
  }

  const setRating = (rating: number) => {
    setUserRating(userRating === rating ? 0 : rating)
  }

  return (
    <div className="min-h-screen bg-[#14181c] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-[#2c3440] pt-[env(safe-area-inset-top)]">
        <button onClick={onBack} className="text-[#9ab] flex items-center gap-1">
          <ChevronLeft size={24} />
          <span>Cancel</span>
        </button>
        <span className="text-white font-semibold">I Watched...</span>
        <button
          onClick={handleSave}
          className="text-[#00e054] font-semibold"
        >
          Save
        </button>
      </header>

      {/* Movie Info */}
      <div className="flex gap-4 p-4 border-b border-[#2c3440]">
        <img
          src={`${TMDB_IMG_POSTER}${movie.poster_path}`}
          alt={movie.title}
          className="w-16 h-24 object-cover rounded"
        />
        <div className="flex-1">
          <h2 className="text-white font-semibold text-lg">{movie.title}</h2>
          <p className="text-[#9ab] text-sm">{movie.release_date}</p>
          {movie.director && (
            <p className="text-[#9ab] text-sm">Directed by {movie.director}</p>
          )}
        </div>
      </div>

      {/* Date Picker */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-[#2c3440]">
        <Calendar size={20} className="text-[#9ab]" />
        <span className="text-[#9ab] text-sm">Date</span>
        <input
          type="date"
          value={watchedDate}
          onChange={e => setWatchedDate(e.target.value)}
          className="flex-1 bg-transparent text-white text-right outline-none"
        />
      </div>

      {/* Rating */}
      <div className="px-4 py-4 border-b border-[#2c3440]">
        <span className="text-[#9ab] text-sm block mb-3">Rating</span>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map(i => (
            <button
              key={i}
              onClick={() => setRating(i)}
              className="active:scale-110 transition-transform"
            >
              <Star
                size={36}
                className={
                  i <= userRating
                    ? 'text-[#00e054] fill-[#00e054]'
                    : 'text-[#456]'
                }
              />
            </button>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <div className="flex-1 p-4">
        <textarea
          value={review}
          onChange={e => setReview(e.target.value)}
          placeholder="Add a review..."
          className="w-full h-48 bg-[#2c3440] text-white placeholder-[#9ab] rounded-lg p-4 text-sm outline-none focus:ring-1 focus:ring-[#00e054] resize-none"
        />
      </div>

      {/* Bottom Actions */}
      <div className="flex border-t border-[#2c3440] pb-[env(safe-area-inset-bottom)]">
        <button
          onClick={() => setWatched(!watched)}
          className={`flex-1 flex items-center justify-center gap-2 py-4 ${
            watched ? 'text-[#00e054]' : 'text-[#9ab]'
          }`}
        >
          <Eye size={24} fill={watched ? '#00e054' : 'none'} />
          <span className="text-sm">Watched</span>
        </button>
        <div className="w-px bg-[#2c3440]" />
        <button
          onClick={() => setLiked(!liked)}
          className={`flex-1 flex items-center justify-center gap-2 py-4 ${
            liked ? 'text-[#ee7000]' : 'text-[#9ab]'
          }`}
        >
          <Heart size={24} fill={liked ? '#ee7000' : 'none'} />
          <span className="text-sm">Liked</span>
        </button>
      </div>
    </div>
  )
}
