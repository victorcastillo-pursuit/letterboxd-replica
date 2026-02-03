import { useState } from 'react'
import { TopHeader } from './components/TopHeader'
import { TopTabs } from './components/TopTabs'
import { BottomNav } from './components/BottomNav'
import { WatchlistGrid } from './components/WatchlistGrid'
import { MovieDetail } from './components/MovieDetail'
import { ActionSheet } from './components/ActionSheet'
import { ReviewPage } from './components/ReviewPage'
import { useWatchlist } from './hooks/useWatchlist'
import type { Movie } from './types'

type Page = 'watchlist' | 'detail' | 'actions' | 'review'

function App() {
  const { watchlist, removeMovie, updateMovie, getMovie } = useWatchlist()
  const [currentPage, setCurrentPage] = useState<Page>('watchlist')
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null)

  // Get the current movie from watchlist so it stays in sync with updates
  const selectedMovie = selectedMovieId ? getMovie(selectedMovieId) : null

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovieId(movie.id)
    setCurrentPage('detail')
  }

  const handleShowActions = () => {
    setCurrentPage('actions')
  }

  const handleShowReview = () => {
    setCurrentPage('review')
  }

  const handleBack = () => {
    if (currentPage === 'review') {
      setCurrentPage('actions')
    } else if (currentPage === 'actions') {
      setCurrentPage('detail')
    } else {
      setCurrentPage('watchlist')
      setSelectedMovieId(null)
    }
  }

  const handleRemove = (id: number) => {
    removeMovie(id)
    setCurrentPage('watchlist')
    setSelectedMovieId(null)
  }

  const handleUpdate = (id: number, updates: Partial<Movie>) => {
    updateMovie(id, updates)
  }

  return (
    <div className="min-h-screen bg-[#14181c] text-white">
      {/* Page 1: Watchlist */}
      {currentPage === 'watchlist' && (
        <>
          <div className="sticky top-0 z-10 bg-[#14181c] pt-[env(safe-area-inset-top)]">
            <TopHeader />
            <TopTabs />
          </div>

          <main className="pb-16">
            <WatchlistGrid movies={watchlist} onSelect={handleMovieSelect} />
          </main>

          <BottomNav />
        </>
      )}

      {/* Page 2: Movie Detail */}
      {currentPage === 'detail' && selectedMovie && (
        <>
          <MovieDetail
            movie={selectedMovie}
            onBack={handleBack}
            onShowActions={handleShowActions}
          />
          <BottomNav />
        </>
      )}

      {/* Page 3: Action Sheet */}
      {currentPage === 'actions' && selectedMovie && (
        <>
          <MovieDetail
            movie={selectedMovie}
            onBack={handleBack}
            onShowActions={handleShowActions}
          />
          <ActionSheet
            movie={selectedMovie}
            onClose={handleBack}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
            onReview={handleShowReview}
          />
          <BottomNav />
        </>
      )}

      {/* Page 4: Review */}
      {currentPage === 'review' && selectedMovie && (
        <ReviewPage
          movie={selectedMovie}
          onBack={handleBack}
          onSave={handleUpdate}
        />
      )}
    </div>
  )
}

export default App
