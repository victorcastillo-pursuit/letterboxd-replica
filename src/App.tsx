import { Header } from './components/Header'
import { WatchlistGrid } from './components/WatchlistGrid'
import { MovieSearch } from './components/MovieSearch'
import { useWatchlist } from './hooks/useWatchlist'

function App() {
  const { watchlist, addMovie, removeMovie, isInWatchlist } = useWatchlist()

  return (
    <div className="min-h-screen bg-[#14181c] text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section>
          <h2 className="text-lg font-semibold text-[#9ab] uppercase tracking-wider mb-4">
            Your Watchlist ({watchlist.length})
          </h2>
          <WatchlistGrid movies={watchlist} onRemove={removeMovie} />
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-[#9ab] uppercase tracking-wider mb-4">
            Browse Movies
          </h2>
          <MovieSearch isInWatchlist={isInWatchlist} onAdd={addMovie} />
        </section>
      </main>
    </div>
  )
}

export default App
